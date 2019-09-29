(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-navigation></app-navigation>\n\n<main [ngClass]=\"{'py-0 px-0 my-0 mx-0': specialPage}\"  class=\"mx-lg-5\" >\n    \n  <div class=\"mt-5\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-layout/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-layout/footer/footer.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer text-center font-small footer darken-2 mt-4 wow fadeIn  \">\n\n    <hr class=\"my-4\">\n\n    <div class=\"pb-4\">\n\n        <a target=\"_blank\">\n            <mdb-icon fab icon=\"twitter\" class=\"mr-3 ftrtxt icons\"></mdb-icon>\n        </a>\n\n        <a target=\"_blank\">\n            <mdb-icon fab icon=\"linkedin\" class=\"mr-3 ftrtxt\"></mdb-icon>\n        </a>\n\n        <a target=\"_blank\">\n            <mdb-icon fab icon=\"instagram\" class=\"mr-3 ftrtxt\"></mdb-icon>\n        </a>\n\n        <a target=\"_blank\">\n            <mdb-icon fab icon=\"facebook-f\" class=\"mr-3 ftrtxt\"></mdb-icon>\n        </a>\n    </div>\n\n    <div>\n        <h6 class=\"ftrtxt\"> Copyright @ White Panda Media Pvt. Ltd. </h6>\n        <h6 class=\"ftrtxt\"> All Rights Reserved </h6><br>\n        <h6 class=\"ftrtxt\"> <a>Privacy policy</a> | <a>Terms of service</a> | <a>Service Agreement</a> | <a>Contact us</a> </h6><br>\n    </div>\n\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/main-layout/navigation/navigation.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/main-layout/navigation/navigation.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n    \n    <div class=\"sidebar-fixed position-fixed\">\n        <br><br><br><br>\n        <div class=\"list-group list-group-flush\">\n            <a routerLink=\"component-store\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"fas fa-th-large\" class=\"mr-3\"></mdb-icon></a>\n            <a routerLink=\"search\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"fas fa-search\" class=\"mr-3\"></mdb-icon></a>\n            <a routerLink=\"store\" routerLinkActive=\"active\" class=\"list-group-item list-group-item-action waves-effect\">\n                <mdb-icon fas icon=\"fas fa-store\" class=\"mr-3\"></mdb-icon></a>\n        </div>\n    </div>\n\n    <mdb-navbar [containerInside]=\"false\" SideClass=\"navbar navbar-expand-lg navbar-light white\">\n        <a><img src=\"../../../../assets/img/whitepanda.png\" alt=\"whitepanda\" style=\"padding-left: 60px\"> </a>\n\n        <links style=\"padding-left: 80%\">\n            <ul class=\"navbar-nav\" style=\"align-items: flex-end\">\n                <li class=\"nav-item\" style=\"padding-bottom: 15%\">\n                    <i class=\"fas fa-bell\" style=\"font-size: 150%;\"></i>\n                </li>\n                <li class=\"nav-item\" style=\"padding-left: 30%\">\n                    <img src=\"../../../../assets/img/profile.png\" alt=\"profile\" class=\"rounded-circle\">\n                </li>\n            </ul>\n        </links>\n    </mdb-navbar>\n</header>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/cascading-card/cascading-card.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/cascading-card/cascading-card.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade mt-3\">\n    <!--Card image-->\n    <div class=\"view overlay hm-white-slight waves-light\" mdbWavesEffect>\n        <img src={{src}} class=\"img-fluid\">\n        <a>\n            <div class=\"mask\"></div>\n        </a>\n    </div>\n    <!--/Card image-->\n    <!--Card content-->\n    <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n        <h4 class=\"card-title mb-3 font-bold\" *ngIf=\"title!==''\"><strong>{{title}}</strong></h4>\n            <ng-content></ng-content>\n    </div>\n    <!--/.Card content-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/cascading-panel/cascading-panel.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/cascading-panel/cascading-panel.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Card-->\n<div [ngClass]=\"(headerType==='wide')?'wider':(headerType==='narrow')?'narrower':''\" class=\"card card-cascade\">\n  <!--Card image-->\n  <div class=\"view gradient-card-header {{panelClass}}\">\n    <h4 class=\"h4-responsive\">{{title}} </h4>\n  </div>\n  <!--/Card image-->\n  <!--Card content-->\n  <div class=\"card-body\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n    <ng-content></ng-content>\n  </div>\n  <!--/.Card content-->\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/modal/modal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Button -->\n<button type=\"button\" class=\"btn btn-primary relative waves-light\" (click)=\"basicModal.show()\" mdbWavesEffect>Launch demo modal</button>\n<!-- /Button -->\n\n<div mdbModal #basicModal=\"mdb-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\" [config]=\"{backdrop: false, ignoreBackdropClick: true}\">\n    <div class=\"modal-dialog\" [ngClass]=\"getClass()\" role=\"document\">\n            <ng-content></ng-content>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/overlay-card/overlay-card.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/overlay-card/overlay-card.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"card card-image mb-3\" [ngStyle]=\"{'background-image': 'url(' + src + ')'}\"  [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <div class=\"text-white d-flex py-5 px-4 {{color}}\"\n >\n      <ng-content></ng-content></div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/components/panel/panel.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/components/panel/panel.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--Panel-->\n<div class=\"card mt-3\" [ngClass]=\"(alignment==='left')?'text-left':(alignment==='right')?'text-right':'text-center'\">\n  <h3 class=\"card-header {{color}} white-text\" *ngIf=\"header!==''\">{{header}}</h3>\n  <div class=\"card-body\">\n    <ng-content></ng-content>\n  </div>\n  <div class=\"card-footer text-muted {{color}} white-text\" *ngIf=\"footer!==''\">\n    <p class=\"mb-0\">{{footer}}</p>\n  </div>\n</div>\n<!--/.Panel-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/comp-store/comp-store.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/comp-store/comp-store.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"bodyalign\">\n    <h3>Content Store</h3>\n\n    <br><br>\n\n    <div style=\"background: #f9fbfb\">\n        <div style=\"padding: 2%\">\n                <div>\n                    <h5 color=\"primary\">\n                        Got bulk orders or almost similar orders ? Fill the order brief in an excel sheet\n                    </h5>\n                </div>\n                <div style=\"width: 80%\">\n                    <p>\n                        If you're wondering about an easy way to place large orders in large numbers, we provide a way customized just for that.\n                        Download our excel sheet, and fill the order brief in the prescribed format and submit. In case you need any help, \n                        <u>we are just a click away to assist you in placeing your order.</u>\n                    </p>\n                </div>\n                <div>\n                        <a mdbBtn color=\"primary\" style=\"align-self: flex-start\" mdbWavesEffect> Order via Excel Sheet </a>\n                </div>\n            </div>\n    </div>\n\n    <br><br>\n\n    <div class = \"row\">\n        <div class=\"col-md-4\" *ngFor=\"let card of cardcontent\">\n            <mdb-card cascade=\"true\" narrower=\"true\">\n                <mdb-card-body class=\"text-center\">\n                    <mdb-card-title>\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <img src=\"../../../assets/img/peacock.png\" class=\"rounded-circle\">\n                            </div>\n                            <div class=\"col-md-8 cardleft\">\n                                <h5 class=\"cardleft\">{{card.title}}</h5>\n                                <h6 class=\"cardleft\">{{card.sectitle}}</h6>\n                            </div>\n                        </div>\n                    </mdb-card-title>\n                    <br>\n                    <mdb-card-text>{{card.content}}</mdb-card-text>\n                    <a mdbBtn color=\"primary\" style=\"align-self: flex-start\" mdbWavesEffect> Order </a>\n                </mdb-card-body>\n            </mdb-card>\n            <br><br>\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, location) {
        var _this = this;
        this.router = router;
        this.location = location;
        this.values = ['Tag 1', 'Tag 2', 'Tag 4'];
        this.specialPages = [
            '/pages/login',
            '/pages/register',
            '/pages/lock',
            '/pages/pricing',
            '/pages/single-post',
            '/pages/post-listing'
        ];
        this.currentUrl = '';
        this.router.events.subscribe(function (route) {
            _this.currentUrl = route.url;
            _this.specialPage = _this.specialPages.indexOf(_this.currentUrl) !== -1;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBack = function () {
        this.location.back();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.routes.service */ "./src/app/app.routes.service.ts");
/* harmony import */ var _views_views_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/views.module */ "./src/app/views/views.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-layout/navigation/navigation.module */ "./src/app/main-layout/navigation/navigation.module.ts");











// main layout

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]
            ],
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmCoreModule"].forRoot({
                    apiKey: ''
                }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _main_layout_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_11__["NavigationModule"],
                _app_routes_service__WEBPACK_IMPORTED_MODULE_8__["AppRoutes"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                _views_views_module__WEBPACK_IMPORTED_MODULE_9__["ViewsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.service.ts":
/*!***************************************!*\
  !*** ./src/app/app.routes.service.ts ***!
  \***************************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_comp_store_comp_store_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/comp-store/comp-store.component */ "./src/app/views/comp-store/comp-store.component.ts");


var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'component-store' },
    { path: 'component-store', children: [
            { path: '', component: _views_comp_store_comp_store_component__WEBPACK_IMPORTED_MODULE_1__["CompStoreComponent"] },
        ]
    },
];
var AppRoutes = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes);


/***/ }),

/***/ "./src/app/main-layout/footer/footer.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/main-layout/footer/footer.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #fff;\n}\n\n.ftrtxt {\n  color: black;\n}\n\n.icons {\n  size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Nrc3Rhci9Eb2N1bWVudHMvR2l0SHViL1doaXRlUGFuZGEvc3JjL2FwcC9tYWluLWxheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tYWluLWxheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLFlBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL21haW4tbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb290ZXJ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmZ0cnR4dHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5pY29uc3tcbiAgICBzaXplOiAxMnB4O1xufSIsIi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uZnRydHh0IHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbnMge1xuICBzaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-layout/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/main-layout/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/main-layout/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/main-layout/navigation/navigation.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 100px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1050;\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 20;\n}\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 2px;\n}\n\n.sidebar-fixed .logo-wrapper {\n  padding: 0.5rem;\n}\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 20px;\n}\n\n@media (min-width: 1200px) {\n  .navbar,\n.page-footer,\nmain {\n    padding-left: 270px;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .sidebar-fixed {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Nrc3Rhci9Eb2N1bWVudHMvR2l0SHViL1doaXRlUGFuZGEvc3JjL2FwcC9tYWluLWxheW91dC9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21haW4tbGF5b3V0L25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBRUEsNkVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBRUUsNkVBQUE7RUFFQSxrQkFBQTtBQ0dOOztBREZJO0VBQ0UsZUFBQTtBQ0tOOztBREpNO0VBQ0UsZ0JBQUE7QUNPUjs7QURMRTtFQUNFOzs7SUFHRSxtQkFBQTtFQ1FKO0FBQ0Y7O0FEUEU7RUFDRTtJQUNFLGFBQUE7RUNTSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWFpbi1sYXlvdXQvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItZml4ZWQge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgei1pbmRleDogMTA1MDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMjA7IH1cbiAgICAuc2lkZWJhci1maXhlZCAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMnB4OyB9XG4gICAgLnNpZGViYXItZml4ZWQgLmxvZ28td3JhcHBlciB7XG4gICAgICBwYWRkaW5nOiAwLjVyZW07IH1cbiAgICAgIC5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIgaW1nIHtcbiAgICAgICAgbWF4LWhlaWdodDogMjBweDsgfVxuICBcbiAgQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgIC5uYXZiYXIsXG4gICAgLnBhZ2UtZm9vdGVyLFxuICAgIG1haW4ge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyNzBweDsgfSB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gICAgLnNpZGViYXItZml4ZWQge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9ICAiLCIuc2lkZWJhci1maXhlZCB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDBweDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDEwNTA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgcGFkZGluZy10b3A6IDIwO1xufVxuXG4uc2lkZWJhci1maXhlZCAubGlzdC1ncm91cCAuYWN0aXZlIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG5cbi5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5zaWRlYmFyLWZpeGVkIC5sb2dvLXdyYXBwZXIgaW1nIHtcbiAgbWF4LWhlaWdodDogMjBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAubmF2YmFyLFxuLnBhZ2UtZm9vdGVyLFxubWFpbiB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNzBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAuc2lkZWJhci1maXhlZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/main-layout/navigation/navigation.component.ts ***!
  \****************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


//import { Ng2ImgMaxService } from 'ng2-img-max';
//declare function require(path: string):any;
var NavigationComponent = /** @class */ (function () {
    // TODO: Need to fix the click effect of years
    function NavigationComponent(
    //private ng2ImgMax: Ng2ImgMaxService
    ) {
        this.years = ['1999', '2000', '2001', '2002', '2005', '2010', '2017', '2019'];
        this.clicked = this.clicked === undefined ? false : true;
        //this.insertImage();
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.setClicked = function (val) {
        this.clicked = val;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: true })
    ], NavigationComponent.prototype, "sidenav", void 0);
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/index.js!./src/app/main-layout/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/main-layout/navigation/navigation.component.scss")]
        })
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/main-layout/navigation/navigation.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-layout/navigation/navigation.module.ts ***!
  \*************************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navigation.component */ "./src/app/main-layout/navigation/navigation.component.ts");
/* harmony import */ var ng2_img_max__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-img-max */ "./node_modules/ng2-img-max/dist/ng2-img-max.js");








var NavigationModule = /** @class */ (function () {
    function NavigationModule() {
    }
    NavigationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["MDBBootstrapModule"].forRoot(),
                ng2_img_max__WEBPACK_IMPORTED_MODULE_7__["Ng2ImgMaxModule"]
            ],
            declarations: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
            ],
            exports: [
                _navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["NO_ERRORS_SCHEMA"],
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
            ],
            providers: []
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "./src/app/shared/components/cascading-card/cascading-card.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cascading-card/cascading-card.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhc2NhZGluZy1jYXJkL2Nhc2NhZGluZy1jYXJkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/cascading-card/cascading-card.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/cascading-card/cascading-card.component.ts ***!
  \******************************************************************************/
/*! exports provided: CascadingCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CascadingCardComponent", function() { return CascadingCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CascadingCardComponent = /** @class */ (function () {
    function CascadingCardComponent() {
        this.headerType = '';
        this.title = '';
        this.alignment = 'center';
        this.src = '';
    }
    CascadingCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingCardComponent.prototype, "headerType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingCardComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingCardComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingCardComponent.prototype, "src", void 0);
    CascadingCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cascading-card',
            template: __webpack_require__(/*! raw-loader!./cascading-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/cascading-card/cascading-card.component.html"),
            styles: [__webpack_require__(/*! ./cascading-card.component.scss */ "./src/app/shared/components/cascading-card/cascading-card.component.scss")]
        })
    ], CascadingCardComponent);
    return CascadingCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/cascading-panel/cascading-panel.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/cascading-panel/cascading-panel.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Nhc2NhZGluZy1wYW5lbC9jYXNjYWRpbmctcGFuZWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/cascading-panel/cascading-panel.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/cascading-panel/cascading-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: CascadingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CascadingPanelComponent", function() { return CascadingPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CascadingPanelComponent = /** @class */ (function () {
    function CascadingPanelComponent() {
        this.headerType = '';
        this.title = '';
        this.panelClass = '';
        this.alignment = 'center';
    }
    CascadingPanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingPanelComponent.prototype, "headerType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingPanelComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingPanelComponent.prototype, "panelClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], CascadingPanelComponent.prototype, "alignment", void 0);
    CascadingPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cascading-panel',
            template: __webpack_require__(/*! raw-loader!./cascading-panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/cascading-panel/cascading-panel.component.html"),
            styles: [__webpack_require__(/*! ./cascading-panel.component.scss */ "./src/app/shared/components/cascading-panel/cascading-panel.component.scss")]
        })
    ], CascadingPanelComponent);
    return CascadingPanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ModalComponent = /** @class */ (function () {
    function ModalComponent() {
        this.type = '';
        this.side = '';
        this.size = '';
        this.getClass = function () {
            var type = this.type;
            var size = this.size;
            var side = this.side;
            if (type === 'central') {
                if (size === 'small') {
                    return 'modal-sm';
                }
                else if (size === 'large') {
                    return 'modal-lg';
                }
                else if (size === 'fluid') {
                    return 'modal-fluid';
                }
                else {
                    return '';
                }
            }
            else if (type === 'side') {
                if (side === 'top-left') {
                    return 'modal-side modal-top-left';
                }
                else if (side === 'bottom-left') {
                    return 'modal-side modal-bottom-left';
                }
                else if (side === 'bottom-right') {
                    return 'modal-side modal-bottom-right';
                }
                else {
                    return 'modal-side modal-top-right';
                }
            }
            else if (type === 'fluid') {
                if (side === 'right') {
                    return 'modal-full-height modal-right';
                }
                else if (side === 'left') {
                    return 'modal-full-height modal-left';
                }
                else if (side === 'bottom') {
                    return 'modal-full-height modal-bottom';
                }
                else {
                    return 'modal-full-height modal-top';
                }
            }
            else if (type === 'frame') {
                if (side === 'bottom') {
                    return 'modal-frame modal-bottom';
                }
                else {
                    return 'modal-frame modal-top';
                }
            }
            else {
                return '';
            }
        };
    }
    ModalComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "side", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ModalComponent.prototype, "size", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'modal',
            template: __webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/modal/modal.component.html"),
            styles: [__webpack_require__(/*! ./modal.component.scss */ "./src/app/shared/components/modal/modal.component.scss")]
        })
    ], ModalComponent);
    return ModalComponent;
}());

;


/***/ }),

/***/ "./src/app/shared/components/overlay-card/overlay-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/overlay-card/overlay-card.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL292ZXJsYXktY2FyZC9vdmVybGF5LWNhcmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/components/overlay-card/overlay-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/overlay-card/overlay-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: OverlayCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayCardComponent", function() { return OverlayCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverlayCardComponent = /** @class */ (function () {
    function OverlayCardComponent() {
        this.alignment = 'center';
        this.src = '';
        this.color = '';
    }
    OverlayCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OverlayCardComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OverlayCardComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OverlayCardComponent.prototype, "color", void 0);
    OverlayCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'overlay-card',
            template: __webpack_require__(/*! raw-loader!./overlay-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/overlay-card/overlay-card.component.html"),
            styles: [__webpack_require__(/*! ./overlay-card.component.scss */ "./src/app/shared/components/overlay-card/overlay-card.component.scss")]
        })
    ], OverlayCardComponent);
    return OverlayCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/panel/panel.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/panel/panel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/components/panel/panel.component.ts ***!
  \************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.alignment = 'center';
        this.color = '';
        this.header = '';
        this.footer = '';
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PanelComponent.prototype, "alignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PanelComponent.prototype, "color", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PanelComponent.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], PanelComponent.prototype, "footer", void 0);
    PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'panel',
            template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/components/panel/panel.component.html"),
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/shared/components/panel/panel.component.scss")]
        })
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cascading-panel/cascading-panel.component */ "./src/app/shared/components/cascading-panel/cascading-panel.component.ts");
/* harmony import */ var _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cascading-card/cascading-card.component */ "./src/app/shared/components/cascading-card/cascading-card.component.ts");
/* harmony import */ var _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/overlay-card/overlay-card.component */ "./src/app/shared/components/overlay-card/overlay-card.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/shared/components/panel/panel.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
            ],
            declarations: [
                _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__["CascadingPanelComponent"],
                _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__["CascadingCardComponent"],
                _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__["OverlayCardComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
            ],
            exports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"],
                _components_cascading_panel_cascading_panel_component__WEBPACK_IMPORTED_MODULE_5__["CascadingPanelComponent"],
                _components_cascading_card_cascading_card_component__WEBPACK_IMPORTED_MODULE_6__["CascadingCardComponent"],
                _components_overlay_card_overlay_card_component__WEBPACK_IMPORTED_MODULE_7__["OverlayCardComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["PanelComponent"],
                _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__["ModalComponent"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/comp-store/comp-store.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/comp-store/comp-store.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cardleft {\n  align-items: flex-end;\n}\n\n.bodyalign {\n  padding-left: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yb2Nrc3Rhci9Eb2N1bWVudHMvR2l0SHViL1doaXRlUGFuZGEvc3JjL2FwcC92aWV3cy9jb21wLXN0b3JlL2NvbXAtc3RvcmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2NvbXAtc3RvcmUvY29tcC1zdG9yZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHFCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29tcC1zdG9yZS9jb21wLXN0b3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uY2FyZGxlZnR7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4uYm9keWFsaWdue1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbn0iLCIuY2FyZGxlZnQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5ib2R5YWxpZ24ge1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/views/comp-store/comp-store.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/comp-store/comp-store.component.ts ***!
  \**********************************************************/
/*! exports provided: CompStoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompStoreComponent", function() { return CompStoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CompStoreComponent = /** @class */ (function () {
    function CompStoreComponent() {
        this.cardcontent = [
            {
                title: 'Blog/Article',
                sectitle: 'from ₹500',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Newsletter/E-mailer',
                sectitle: 'from ₹1000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Whitepaper',
                sectitle: 'from ₹2000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'e-book',
                sectitle: 'from ₹1000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Report/Guide',
                sectitle: 'from ₹1000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Product Description',
                sectitle: 'from ₹500',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Website Content',
                sectitle: 'from ₹1000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Video Script',
                sectitle: 'from ₹1000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Company Profile/Brouchure',
                sectitle: 'from ₹2000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
            {
                title: 'Press Release',
                sectitle: 'from ₹2000',
                content: 'Typically 450-500 words, an e-book is perfect for your target audience ranging from prospective customers to users'
            },
        ];
    }
    CompStoreComponent.prototype.ngOnInit = function () {
    };
    CompStoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-comp-store',
            template: __webpack_require__(/*! raw-loader!./comp-store.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/comp-store/comp-store.component.html"),
            styles: [__webpack_require__(/*! ./comp-store.component.scss */ "./src/app/views/comp-store/comp-store.component.scss")]
        })
    ], CompStoreComponent);
    return CompStoreComponent;
}());



/***/ }),

/***/ "./src/app/views/views.module.ts":
/*!***************************************!*\
  !*** ./src/app/views/views.module.ts ***!
  \***************************************/
/*! exports provided: ViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsModule", function() { return ViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../main-layout/footer/footer.component */ "./src/app/main-layout/footer/footer.component.ts");
/* harmony import */ var _comp_store_comp_store_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comp-store/comp-store.component */ "./src/app/views/comp-store/comp-store.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm5/ngx-avatar.js");












var ViewsModule = /** @class */ (function () {
    function ViewsModule() {
    }
    ViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
                    apiKey: ''
                }),
                ngx_avatar__WEBPACK_IMPORTED_MODULE_11__["AvatarModule"]
            ],
            declarations: [
                _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _comp_store_comp_store_component__WEBPACK_IMPORTED_MODULE_10__["CompStoreComponent"],
            ],
            exports: [
                _main_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _comp_store_comp_store_component__WEBPACK_IMPORTED_MODULE_10__["CompStoreComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], ViewsModule);
    return ViewsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rockstar/Documents/GitHub/WhitePanda/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map