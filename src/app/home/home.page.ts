import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';

import { finalize } from 'rxjs/operators';

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  images = [];
  private positionData: any;

  constructor(private camera: Camera,
    private file: File,
    private http: HttpClient,
    private webview: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private storage: Storage,
    private plt: Platform,
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef,
    private filePath: FilePath) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }

  loadStoredImages() {
    (this.images.length != 0) ? this.images = [] : this.images;
    this.storage.get(STORAGE_KEY).then(images => {
      //alert('images :' + images);
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
          // alert("pushed Data: " + this.images);
        }
      }
    });
  }

  pathForImage(img) {
    //alert("pathForImage:-->" + img)
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
  // call done from user side 
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        //alert("If android hited" + imagePath ) 

        // From gelary
        let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());

      } else {
        // from camera 
        // alert("else hited" + imagePath)
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });

  }
  createFileName() {
    var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
    return newFileName;
  }

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      // alert("newFileName --> " + newFileName); 
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  updateStoredImages(name) {
    //alert( 'updateStoredImages -->' + name )
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);

      if (!arr) {

        let newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));

      } else {

        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      //alert("images: --> " + this.images);
      this.ref.detectChanges(); // trigger change detection cycle
    });
  }

  deleteImage(imgEntry, position) {
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
      });
    });
  }


  startUpload(imgEntry, position) {
    this.positionData = position;
    //alert('upload Button Hited ==>' + imgEntry)
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
      .then(entry => {
        (<FileEntry>entry).file(file => this.readFile(file))
      })
      .catch(err => {
        this.presentToast('Error while reading file.');
      });
  }

  readFile(file: any) {
    //alert("reading the file from input "+ file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      //alert("blobImage --> " + imgBlob);
      //alert("file " + file);
      formData.append('myImage', imgBlob, file.name);
      this.uploadImageData(formData);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData) {

    //alert( " uploading Data" + JSON.stringify(formData))
    const loading = await this.loadingController.create({

    });


    await loading.present();
    // var options = {
    //   enctype: 'multipart/form-data'
    // };

    this.http.post("http://18.188.66.126:8888/uploadImage?collection=uploadedFiles", formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        })
      )
      .subscribe(res => {
        //alert("upload REs" + JSON.stringify(res))
        if (res['message'] == 'Data submitted successfully.') {
          // alert("uploaded")
          this.presentToast('File upload complete.');
          this.images.splice(this.positionData, 1);

        } else {
          //alert("faild");
          this.presentToast('File upload failed.')
        }
      });
  }

}