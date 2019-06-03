(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>\n      Ionic Image Upload\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  <h3 *ngIf=\"images.length == 0\" text-center>Please Select Image!</h3>\n \n  <ion-list>\n    <ion-item *ngFor=\"let img of images; index as pos\" text-wrap>\n      <ion-thumbnail slot=\"start\">\n        <ion-img [src]=\"img.path\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        {{ img.name }}\n      </ion-label>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"startUpload(img,pos)\">\n        <ion-icon slot=\"icon-only\" name=\"cloud-upload\"></ion-icon>\n      </ion-button>\n      <ion-button slot=\"end\" fill=\"clear\" (click)=\"deleteImage(img, pos)\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n \n<ion-footer>\n  <ion-toolbar color=\"primary\">\n    <ion-button fill=\"clear\" expand=\"full\" color=\"light\" (click)=\"selectImage()\">\n      <ion-icon slot=\"start\" name=\"camera\"></ion-icon>\n      Select Image</ion-button>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var STORAGE_KEY = 'my_images';
var HomePage = /** @class */ (function () {
    function HomePage(camera, file, http, webview, actionSheetController, toastController, storage, plt, loadingController, ref, filePath) {
        this.camera = camera;
        this.file = file;
        this.http = http;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.storage = storage;
        this.plt = plt;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.images = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.plt.ready().then(function () {
            _this.loadStoredImages();
        });
    };
    HomePage.prototype.loadStoredImages = function () {
        var _this = this;
        (this.images.length != 0) ? this.images = [] : this.images;
        this.storage.get(STORAGE_KEY).then(function (images) {
            //alert('images :' + images);
            if (images) {
                var arr = JSON.parse(images);
                _this.images = [];
                for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                    var img = arr_1[_i];
                    var filePath = _this.file.dataDirectory + img;
                    var resPath = _this.pathForImage(filePath);
                    _this.images.push({ name: img, path: resPath, filePath: filePath });
                    // alert("pushed Data: " + this.images);
                }
            }
        });
    };
    HomePage.prototype.pathForImage = function (img) {
        //alert("pathForImage:-->" + img)
        if (img === null) {
            return '';
        }
        else {
            var converted = this.webview.convertFileSrc(img);
            return converted;
        }
    };
    HomePage.prototype.presentToast = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            position: 'bottom',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    // call done from user side 
    HomePage.prototype.selectImage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: "Select Image source",
                            buttons: [{
                                    text: 'Load from Library',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                },
                                {
                                    text: 'Use Camera',
                                    handler: function () {
                                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(function (imagePath) {
            if (_this.plt.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                //alert("If android hited" + imagePath ) 
                // From gelary
                var correctPath_1 = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                var currentName_1 = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                _this.copyFileToLocalDir(correctPath_1, currentName_1, _this.createFileName());
            }
            else {
                // from camera 
                // alert("else hited" + imagePath)
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        });
    };
    HomePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    HomePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(function (success) {
            // alert("newFileName --> " + newFileName); 
            _this.updateStoredImages(newFileName);
        }, function (error) {
            _this.presentToast('Error while storing file.');
        });
    };
    HomePage.prototype.updateStoredImages = function (name) {
        var _this = this;
        //alert( 'updateStoredImages -->' + name )
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            if (!arr) {
                var newImages = [name];
                _this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
            }
            else {
                arr.push(name);
                _this.storage.set(STORAGE_KEY, JSON.stringify(arr));
            }
            var filePath = _this.file.dataDirectory + name;
            var resPath = _this.pathForImage(filePath);
            var newEntry = {
                name: name,
                path: resPath,
                filePath: filePath
            };
            _this.images = [newEntry].concat(_this.images);
            //alert("images: --> " + this.images);
            _this.ref.detectChanges(); // trigger change detection cycle
        });
    };
    HomePage.prototype.deleteImage = function (imgEntry, position) {
        var _this = this;
        this.images.splice(position, 1);
        this.storage.get(STORAGE_KEY).then(function (images) {
            var arr = JSON.parse(images);
            var filtered = arr.filter(function (name) { return name != imgEntry.name; });
            _this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
            var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
            _this.file.removeFile(correctPath, imgEntry.name).then(function (res) {
                _this.presentToast('File removed.');
            });
        });
    };
    HomePage.prototype.startUpload = function (imgEntry, position) {
        var _this = this;
        this.positionData = position;
        //alert('upload Button Hited ==>' + imgEntry)
        this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
            .then(function (entry) {
            entry.file(function (file) { return _this.readFile(file); });
        })
            .catch(function (err) {
            _this.presentToast('Error while reading file.');
        });
    };
    HomePage.prototype.readFile = function (file) {
        var _this = this;
        //alert("reading the file from input "+ file);
        var reader = new FileReader();
        reader.onloadend = function () {
            var formData = new FormData();
            var imgBlob = new Blob([reader.result], {
                type: file.type
            });
            //alert("blobImage --> " + imgBlob);
            //alert("file " + file);
            formData.append('myImage', imgBlob, file.name);
            _this.uploadImageData(formData);
        };
        reader.readAsArrayBuffer(file);
    };
    HomePage.prototype.uploadImageData = function (formData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({})];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        // var options = {
                        //   enctype: 'multipart/form-data'
                        // };
                        this.http.post("http://18.188.66.126:8888/uploadImage?collection=uploadedFiles", formData)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["finalize"])(function () {
                            loading.dismiss();
                        }))
                            .subscribe(function (res) {
                            //alert("upload REs" + JSON.stringify(res))
                            if (res['message'] == 'Data submitted successfully.') {
                                // alert("uploaded")
                                _this.presentToast('File upload complete.');
                                _this.images.splice(_this.positionData, 1);
                            }
                            else {
                                //alert("faild");
                                _this.presentToast('File upload failed.');
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_6__["WebView"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
            _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_8__["FilePath"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map