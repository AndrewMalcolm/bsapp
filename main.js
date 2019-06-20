(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  admin works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/alternateclick/alternateclick.component.css":
/*!*************************************************************!*\
  !*** ./src/app/alternateclick/alternateclick.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsdGVybmF0ZWNsaWNrL2FsdGVybmF0ZWNsaWNrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alternateclick/alternateclick.component.html":
/*!**************************************************************!*\
  !*** ./src/app/alternateclick/alternateclick.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    body{\n      position:relative;\n    }\n    .whitespace {\n      float:left;\n      background-color: white;\n      border-style: solid;\n      border-color: gray;\n      border-width: 1px;\n      width: 60%;\n      margin-left: 2%;\n      margin-top: 0%;\n      min-height: 200px;\n    }\n    .helper {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      width: 17%;\n      min-height: 200px;\n    }\n    td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n    }\n    table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n    }\n    .articledetails{\n      position: relative;\n      top: 10px;\n      left: 10px;\n    }\n    .box{\n      float:right;\n      width: 250px;\n      height: 60px;\n      border-width:1.5px;\n      border-color:black;\n      border-style:solid;\n      background-color:lightgray;\n      padding: 5px;\n\n    }\n\n    .button{\n      float: right;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      cursor: pointer;\n    }\n  \n    \n</style>\n\n<div class=\"box\">\n  <b>{{article.title}}</b><div class=\"button\">\n      <a [routerLink]=\"['/view',this.article.bestek,this.article.type,'accepted',this.article.id]\">\n      <img src=\"../assets/images/view.png\" alt=\"view\" style=\"width:20px;height:20px;border:0;\" />\n    </a>\n  </div>\n  <br>{{article.bestek}}            {{article.type}}\n  \n</div>\n"

/***/ }),

/***/ "./src/app/alternateclick/alternateclick.component.ts":
/*!************************************************************!*\
  !*** ./src/app/alternateclick/alternateclick.component.ts ***!
  \************************************************************/
/*! exports provided: AlternateclickComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlternateclickComponent", function() { return AlternateclickComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AlternateclickComponent = /** @class */ (function () {
    function AlternateclickComponent(qserv, router) {
        this.qserv = qserv;
        this.router = router;
    }
    AlternateclickComponent.prototype.ngOnInit = function () {
        this.article = this.article;
    };
    AlternateclickComponent.prototype.hrefget = function () {
        this.router.navigateByUrl("/view/PLB/official_oldversion_2/accepted/0010");
        this.router.navigateByUrl("/view/PLB/official_oldversion_2/accepted/0010");
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], AlternateclickComponent.prototype, "article", void 0);
    AlternateclickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alternateclick',
            template: __webpack_require__(/*! ./alternateclick.component.html */ "./src/app/alternateclick/alternateclick.component.html"),
            styles: [__webpack_require__(/*! ./alternateclick.component.css */ "./src/app/alternateclick/alternateclick.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_3__["QueryserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AlternateclickComponent);
    return AlternateclickComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutingModule", function() { return appRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _plb_plb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./plb/plb.component */ "./src/app/plb/plb.component.ts");
/* harmony import */ var _mlb_mlb_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mlb/mlb.component */ "./src/app/mlb/mlb.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo.component.ts");
/* harmony import */ var _articleedit_articleedit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./articleedit/articleedit.component */ "./src/app/articleedit/articleedit.component.ts");
/* harmony import */ var _usereditor_usereditor_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./usereditor/usereditor.component */ "./src/app/usereditor/usereditor.component.ts");
/* harmony import */ var _articleviewer_articleviewer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./articleviewer/articleviewer.component */ "./src/app/articleviewer/articleviewer.component.ts");
/* harmony import */ var _articlerequest_articlerequest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./articlerequest/articlerequest.component */ "./src/app/articlerequest/articlerequest.component.ts");















var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'moederlastenboek', component: _mlb_mlb_component__WEBPACK_IMPORTED_MODULE_8__["MlbComponent"] },
    { path: 'projectlastenboek', component: _plb_plb_component__WEBPACK_IMPORTED_MODULE_7__["PlbComponent"] },
    { path: 'manager', component: _manager_manager_component__WEBPACK_IMPORTED_MODULE_9__["ManagerComponent"] },
    { path: 'userinfo', component: _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_10__["UserinfoComponent"] },
    { path: 'testartikel', component: _articleedit_articleedit_component__WEBPACK_IMPORTED_MODULE_11__["ArticleeditComponent"] },
    { path: 'usereditor', component: _usereditor_usereditor_component__WEBPACK_IMPORTED_MODULE_12__["UsereditorComponent"] },
    { path: 'view/:bestek/:type/:format/:id', component: _articleviewer_articleviewer_component__WEBPACK_IMPORTED_MODULE_13__["ArticleviewerComponent"] },
    { path: 'edit/:bestek/:type/:format/:id', component: _articleedit_articleedit_component__WEBPACK_IMPORTED_MODULE_11__["ArticleeditComponent"] },
    { path: 'request/:bestek/:type/:format/:id', component: _articlerequest_articlerequest_component__WEBPACK_IMPORTED_MODULE_14__["ArticlerequestComponent"] },
    { path: 'usereditor', component: _usereditor_usereditor_component__WEBPACK_IMPORTED_MODULE_12__["UsereditorComponent"] }
];
var appRoutingModule = /** @class */ (function () {
    function appRoutingModule() {
    }
    appRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], appRoutingModule);
    return appRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\r\n<style>\r\n  body{\r\n    background-color: navajowhite;\r\n    margin: 0px;\r\n    min-height: 735px;\r\n    overflow: auto;\r\n  }\r\n</style>\r\n<body *ngIf=\"startapp\">\r\n  <app-dashboard></app-dashboard>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queryservice.service */ "./src/app/queryservice.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(qserv) {
        this.qserv = qserv;
        this.title = 'BSapp';
        this.startapp = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.getlist()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.qserv.localarticlePLBlist("PLB", "official", "accepted")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.qserv.createupdatelist()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.qserv.createnewlist()];
                    case 4:
                        _a.sent();
                        this.startapp = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_2__["QueryserviceService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_tree_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-tree-component */ "./node_modules/angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboardhome/dashboardhome.component */ "./src/app/dashboardhome/dashboardhome.component.ts");
/* harmony import */ var _dashboardlogin_dashboardlogin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboardlogin/dashboardlogin.component */ "./src/app/dashboardlogin/dashboardlogin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboardplb_dashboardplb_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboardplb/dashboardplb.component */ "./src/app/dashboardplb/dashboardplb.component.ts");
/* harmony import */ var _dashboardmlb_dashboardmlb_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboardmlb/dashboardmlb.component */ "./src/app/dashboardmlb/dashboardmlb.component.ts");
/* harmony import */ var _mlb_mlb_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./mlb/mlb.component */ "./src/app/mlb/mlb.component.ts");
/* harmony import */ var _plb_plb_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./plb/plb.component */ "./src/app/plb/plb.component.ts");
/* harmony import */ var _dashboardmanager_dashboardmanager_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboardmanager/dashboardmanager.component */ "./src/app/dashboardmanager/dashboardmanager.component.ts");
/* harmony import */ var _manager_manager_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./manager/manager.component */ "./src/app/manager/manager.component.ts");
/* harmony import */ var _dashboardnotification_dashboardnotification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboardnotification/dashboardnotification.component */ "./src/app/dashboardnotification/dashboardnotification.component.ts");
/* harmony import */ var _dashboarduser_dashboarduser_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboarduser/dashboarduser.component */ "./src/app/dashboarduser/dashboarduser.component.ts");
/* harmony import */ var _dashboardbrowser_dashboardbrowser_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboardbrowser/dashboardbrowser.component */ "./src/app/dashboardbrowser/dashboardbrowser.component.ts");
/* harmony import */ var _browserfool_browserfool_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./browserfool/browserfool.component */ "./src/app/browserfool/browserfool.component.ts");
/* harmony import */ var _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./userinfo/userinfo.component */ "./src/app/userinfo/userinfo.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./records.service */ "./src/app/records.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./treeview/treeview.component */ "./src/app/treeview/treeview.component.ts");
/* harmony import */ var _recursivebrowser_recursivebrowser_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./recursivebrowser/recursivebrowser.component */ "./src/app/recursivebrowser/recursivebrowser.component.ts");
/* harmony import */ var _mainedit_mainedit_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./mainedit/mainedit.component */ "./src/app/mainedit/mainedit.component.ts");
/* harmony import */ var _articleview_articleview_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./articleview/articleview.component */ "./src/app/articleview/articleview.component.ts");
/* harmony import */ var _articlesingleview_articlesingleview_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./articlesingleview/articlesingleview.component */ "./src/app/articlesingleview/articlesingleview.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _articledetailbox_articledetailbox_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./articledetailbox/articledetailbox.component */ "./src/app/articledetailbox/articledetailbox.component.ts");
/* harmony import */ var _articleedit_articleedit_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./articleedit/articleedit.component */ "./src/app/articleedit/articleedit.component.ts");
/* harmony import */ var _exportnavigator_exportnavigator_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./exportnavigator/exportnavigator.component */ "./src/app/exportnavigator/exportnavigator.component.ts");
/* harmony import */ var _singlecomment_singlecomment_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./singlecomment/singlecomment.component */ "./src/app/singlecomment/singlecomment.component.ts");
/* harmony import */ var _commentinput_commentinput_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./commentinput/commentinput.component */ "./src/app/commentinput/commentinput.component.ts");
/* harmony import */ var _usereditor_usereditor_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./usereditor/usereditor.component */ "./src/app/usereditor/usereditor.component.ts");
/* harmony import */ var _articleviewer_articleviewer_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./articleviewer/articleviewer.component */ "./src/app/articleviewer/articleviewer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articledetailboxedit_articledetailboxedit_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./articledetailboxedit/articledetailboxedit.component */ "./src/app/articledetailboxedit/articledetailboxedit.component.ts");
/* harmony import */ var _articlerequest_articlerequest_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./articlerequest/articlerequest.component */ "./src/app/articlerequest/articlerequest.component.ts");
/* harmony import */ var _articlesinglerequest_articlesinglerequest_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./articlesinglerequest/articlesinglerequest.component */ "./src/app/articlesinglerequest/articlesinglerequest.component.ts");
/* harmony import */ var _dashboardnewarticle_dashboardnewarticle_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dashboardnewarticle/dashboardnewarticle.component */ "./src/app/dashboardnewarticle/dashboardnewarticle.component.ts");
/* harmony import */ var _alternateclick_alternateclick_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./alternateclick/alternateclick.component */ "./src/app/alternateclick/alternateclick.component.ts");
















































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_8__["HomepageComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
                _dashboardhome_dashboardhome_component__WEBPACK_IMPORTED_MODULE_10__["DashboardhomeComponent"],
                _dashboardlogin_dashboardlogin_component__WEBPACK_IMPORTED_MODULE_11__["DashboardloginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _dashboardplb_dashboardplb_component__WEBPACK_IMPORTED_MODULE_13__["DashboardplbComponent"],
                _dashboardmlb_dashboardmlb_component__WEBPACK_IMPORTED_MODULE_14__["DashboardmlbComponent"],
                _mlb_mlb_component__WEBPACK_IMPORTED_MODULE_15__["MlbComponent"],
                _plb_plb_component__WEBPACK_IMPORTED_MODULE_16__["PlbComponent"],
                _dashboardmanager_dashboardmanager_component__WEBPACK_IMPORTED_MODULE_17__["DashboardmanagerComponent"],
                _manager_manager_component__WEBPACK_IMPORTED_MODULE_18__["ManagerComponent"],
                _dashboardnotification_dashboardnotification_component__WEBPACK_IMPORTED_MODULE_19__["DashboardnotificationComponent"],
                _dashboarduser_dashboarduser_component__WEBPACK_IMPORTED_MODULE_20__["DashboarduserComponent"],
                _dashboardbrowser_dashboardbrowser_component__WEBPACK_IMPORTED_MODULE_21__["DashboardbrowserComponent"],
                _browserfool_browserfool_component__WEBPACK_IMPORTED_MODULE_22__["BrowserfoolComponent"],
                _userinfo_userinfo_component__WEBPACK_IMPORTED_MODULE_23__["UserinfoComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_24__["AdminComponent"],
                _treeview_treeview_component__WEBPACK_IMPORTED_MODULE_28__["TreeviewComponent"],
                _recursivebrowser_recursivebrowser_component__WEBPACK_IMPORTED_MODULE_29__["RecursivebrowserComponent"],
                _mainedit_mainedit_component__WEBPACK_IMPORTED_MODULE_30__["MaineditComponent"],
                _articleview_articleview_component__WEBPACK_IMPORTED_MODULE_31__["ArticleviewComponent"],
                _articlesingleview_articlesingleview_component__WEBPACK_IMPORTED_MODULE_32__["ArticlesingleviewComponent"],
                _articledetailbox_articledetailbox_component__WEBPACK_IMPORTED_MODULE_35__["ArticledetailboxComponent"],
                _articleedit_articleedit_component__WEBPACK_IMPORTED_MODULE_36__["ArticleeditComponent"],
                _exportnavigator_exportnavigator_component__WEBPACK_IMPORTED_MODULE_37__["ExportnavigatorComponent"],
                _singlecomment_singlecomment_component__WEBPACK_IMPORTED_MODULE_38__["SinglecommentComponent"],
                _commentinput_commentinput_component__WEBPACK_IMPORTED_MODULE_39__["CommentinputComponent"],
                _usereditor_usereditor_component__WEBPACK_IMPORTED_MODULE_40__["UsereditorComponent"],
                _articleviewer_articleviewer_component__WEBPACK_IMPORTED_MODULE_41__["ArticleviewerComponent"],
                _articledetailboxedit_articledetailboxedit_component__WEBPACK_IMPORTED_MODULE_43__["ArticledetailboxeditComponent"],
                _articlerequest_articlerequest_component__WEBPACK_IMPORTED_MODULE_44__["ArticlerequestComponent"],
                _articlesinglerequest_articlesinglerequest_component__WEBPACK_IMPORTED_MODULE_45__["ArticlesinglerequestComponent"],
                _dashboardnewarticle_dashboardnewarticle_component__WEBPACK_IMPORTED_MODULE_46__["DashboardnewarticleComponent"],
                _alternateclick_alternateclick_component__WEBPACK_IMPORTED_MODULE_47__["AlternateclickComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["appRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_42__["RouterModule"],
                angular_tree_component__WEBPACK_IMPORTED_MODULE_4__["TreeModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_25__["HttpClientModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_33__["NgxEditorModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_34__["TooltipModule"].forRoot()
            ],
            providers: [_records_service__WEBPACK_IMPORTED_MODULE_26__["RecordsService"], _auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article.ts":
/*!****************************!*\
  !*** ./src/app/article.ts ***!
  \****************************/
/*! exports provided: Article */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
var Article = /** @class */ (function () {
    function Article(id, bsid, title, language, description, bestek, type, creator, source, format) {
        this.id = id;
        this.bsid = bsid; //this.id.toString().slice(0,2)+"."+this.id.toString().slice(2,4)+"."+this.id.toString().slice(4,6)+".";
        this.title = title;
        this.language = language;
        this.description = description;
        this.bestek = bestek;
        this.type = type;
        this.creator = creator;
        this.source = source;
        this.format = format;
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/articledetailbox/articledetailbox.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/articledetailbox/articledetailbox.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVkZXRhaWxib3gvYXJ0aWNsZWRldGFpbGJveC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/articledetailbox/articledetailbox.component.html":
/*!******************************************************************!*\
  !*** ./src/app/articledetailbox/articledetailbox.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    body{\n      position:relative;\n    }\n    .whitespace {\n      float:left;\n      background-color: white;\n      border-style: solid;\n      border-color: gray;\n      border-width: 1px;\n      width: 60%;\n      margin-left: 2%;\n      margin-top: 0%;\n      min-height: 200px;\n    }\n    .helper {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      width: 17%;\n      min-height: 200px;\n    }\n    td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n    }\n    table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n    }\n    .articledetails{\n      position: relative;\n      top: 10px;\n      left: 10px;\n    }\n    .button{\n      float: left;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      cursor: pointer;\n    }\n    .tooltipper{\n      float: left;\n      margin-top: 14px;\n      margin-left: 5%;\n    }\n    .tooltipper2{\n      float: left;\n      margin-top: 14px;\n      margin-left:20%;\n    }\n    .tooltipper .tooltip{\n      visibility: hidden;\n      background-color: #555;\n      color: #fff;\n      border-radius: 6px;\n      padding: 5px 0;\n      position: absolute;\n      z-index: 1;\n      opacity: 0;\n      transition: opacity 0.3s;\n    }\n    .tooltipper:hover .tooltip{\n      visibility: visible;\n      opacity: 1;\n    }\n    .showforum{\n      float: left;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      width: 95%;\n      text-align: center;\n      font-size:8px;\n      cursor:pointer;\n    }\n</style>\n\n<div class=\"helper\">\n    <table class=\"articledetails\">\n      <caption><b>Article Details</b></caption>\n      <tr>\n        <th width=\"10px\">BSID</th>\n        <th width=\"140px\">{{article.bsid}}</th>\n      </tr>\n      <tr>\n        <th>Title</th>\n        <th>{{article.title}}</th>\n      </tr>\n      <tr>\n        <th>Language</th>\n        <th>{{article.language}}</th>\n      </tr>\n      <tr>\n        <th>Progress</th>\n        <th></th>\n      </tr>\n      <tr>\n        <th>Author</th>\n        <th>{{article.creator}}</th>\n      </tr>\n      <tr>\n        <th>Type</th>\n        <th>{{article.type}}</th>\n      </tr>\n      <tr>\n        <th>Versions</th>\n        <th>{{article.bestek}}</th>\n      </tr>\n      <tr>\n        <th>Format</th>\n        <th>{{article.format}}</th>\n      </tr>\n      <tr>\n        <th>Attachments</th>\n        <th><a href=\"\">examplerevitfamily.rfa</a> <button style=\"float:right;\">+</button></th>\n      </tr>\n    </table>\n    <nav class=\"tooltipper\">\n      \n      <nav class=\"button\" (click)=\"showcommentinput()\">\n        <img src=\"../assets/images/comment.png\" alt=\"comment\" style=\"width:20px;height:20px;border:0;\" />\n      </nav>\n    </nav> \n    <nav class=\"tooltipper\">\n      \n      <nav class=\"button\">\n        <a [routerLink]=\"['/edit',getthisbestek(),getthistype(),getthisformat(),getthisid()]\">\n        <img src=\"../assets/images/edit.png\" alt=\"edit\" style=\"width:20px;height:20px;border:0;\" />\n        </a>\n      </nav>\n    </nav>\n    <nav class=\"tooltipper\">\n      \n      <nav class=\"button\" (click)=\"ohnoes()\">\n        <img src=\"../assets/images/delete.png\" alt=\"thrash\" style=\"width:20px;height:20px;border:0;\" />\n      </nav>\n    </nav>\n    <nav class=\"tooltipper\">\n      \n      <nav class=\"button\">\n        <img src=\"../assets/images/plus.png\" alt=\"plus\" style=\"width:20px;height:20px;border:0;\" />\n      </nav>\n    </nav>\n    <nav class=\"tooltipper\">\n      <nav class=\"button\">\n        <img src=\"../assets/images/forum.png\" alt=\"forum\" style=\"width:20px;height:20px;border:0;\" (click)=\"showcomments()\"/>\n      </nav>\n    </nav>\n    <br/><br/><br/>\n    <span class=\"showforum\" (click)=\"showcomments()\"><b>{{buttonname}}</b>\n      <!---dropdown component comments of the article here-->\n    </span>\n  </div>\n  <div *ngIf=\"opencommenteditor\">\n    <app-commentinput [article]=\"this.article\"></app-commentinput>\n  </div>\n  <div *ngIf=\"openforum\">\n    <!---here comes the other version toggles-->\n    <ul *ngFor=\"let article of altarticles\">\n      <div><app-alternateclick [article]=\"article\"></app-alternateclick></div>\n      \n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/articledetailbox/articledetailbox.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/articledetailbox/articledetailbox.component.ts ***!
  \****************************************************************/
/*! exports provided: ArticledetailboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticledetailboxComponent", function() { return ArticledetailboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");





var ArticledetailboxComponent = /** @class */ (function () {
    function ArticledetailboxComponent(qserv) {
        this.qserv = qserv;
        this.openforum = false;
        this.opencommenteditor = false;
        this.buttonname = "V";
        this.articlecomments = _commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"]; //temporary fix, refreshcommands does not seem to work as intended.
    }
    ArticledetailboxComponent.prototype.refreshcomments = function () {
        for (var i = 0; i < _commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"].length; i++) {
            if (_commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"][i].article.id == this.article.id) {
                this.articlecomments.push(_commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"][i]);
            }
        }
    };
    ArticledetailboxComponent.prototype.getthisid = function () {
        return this.article.id.toString();
    };
    ArticledetailboxComponent.prototype.getthisbestek = function () {
        return this.article.bestek.toString();
    };
    ArticledetailboxComponent.prototype.getthistype = function () {
        return this.article.type.toString();
    };
    ArticledetailboxComponent.prototype.getthisformat = function () {
        return this.article.format.toString();
    };
    ArticledetailboxComponent.prototype.ohnoes = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.flush(this.getthisbestek(), this.getthisid(), this.getthistype(), this.getthisformat())];
                    case 1:
                        _a.sent();
                        console.log("ohnoes");
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticledetailboxComponent.prototype.showcomments = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var thisuri;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.openforum == true)) return [3 /*break*/, 1];
                        this.openforum = !this.openforum;
                        return [3 /*break*/, 3];
                    case 1:
                        thisuri = "<http://example/" + this.getthisbestek() + "/" + this.getthistype() + "/" + this.getthisformat() + "/" + this.getthisid() + ">";
                        return [4 /*yield*/, this.dingske(thisuri)];
                    case 2:
                        _a.sent();
                        //here altarticles gets created as well as an array of the alternate articles
                        this.openforum = !this.openforum;
                        _a.label = 3;
                    case 3:
                        if (this.openforum) {
                            this.buttonname = "V";
                        }
                        else {
                            this.buttonname = "^";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticledetailboxComponent.prototype.showcommentinput = function () {
        this.opencommenteditor = !this.opencommenteditor;
    };
    ArticledetailboxComponent.prototype.dingske = function (tempuri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tempresult, count, i, j, firstchar, lastchar, firsturi, firstarticle, endchar, lengthy;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.altarticles = [];
                        return [4 /*yield*/, this.qserv.describequery(tempuri)];
                    case 1:
                        tempresult = _a.sent();
                        count = (tempresult.match(/prov:alternateof/g) || []).length;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < count)) return [3 /*break*/, 7];
                        console.log(i);
                        console.log(tempresult);
                        j = 0;
                        _a.label = 3;
                    case 3:
                        if (!(j < 120)) return [3 /*break*/, 6];
                        if (!tempresult.slice(tempresult.search("prov:alternateof") - j, tempresult.search("prov:alternateof")).includes("<http://example")) return [3 /*break*/, 5];
                        firstchar = tempresult.search("prov:alternateof") - j;
                        lastchar = tempresult.slice(firstchar).search("prov:alternateof") - 1;
                        firsturi = tempresult.slice(firstchar, firstchar + lastchar);
                        console.log(firsturi);
                        return [4 /*yield*/, this.getbyuri(firsturi)];
                    case 4:
                        firstarticle = _a.sent();
                        this.altarticles.push(firstarticle); //segment van provs weghalen uit stringy en loop opnieuw
                        endchar = tempresult.slice(firstchar + lastchar + 23).search("<http://example");
                        lengthy = firstchar + lastchar + 23 + endchar;
                        console.log(tempresult.slice(firstchar, lengthy));
                        tempresult = tempresult.slice(0, firstchar) + tempresult.slice(lengthy);
                        return [3 /*break*/, 6];
                    case 5:
                        j++;
                        return [3 /*break*/, 3];
                    case 6:
                        i++;
                        return [3 /*break*/, 2];
                    case 7:
                        this.altarticles.splice(1, 1);
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticledetailboxComponent.prototype.getbyuri = function (uri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var stringy, tempid, tempbestek, tempbestek, tempdescription, tempformat, templanguage, temptitle, temptype, tempcreator, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.describequery(uri)];
                    case 1:
                        stringy = _a.sent();
                        tempid = this.qserv.filterfor(stringy, "dc:identifier");
                        console.log(tempid);
                        if (uri.includes("PLB")) {
                            tempbestek = "PLB";
                        }
                        else {
                            tempbestek = "MLB";
                        }
                        console.log(tempbestek);
                        tempdescription = this.qserv.filterfor(stringy, "dc:description");
                        console.log(tempdescription);
                        tempformat = this.qserv.filterfor(stringy, "dc:format");
                        console.log(tempformat);
                        templanguage = this.qserv.filterfor(stringy, "dc:language");
                        console.log(templanguage);
                        temptitle = this.qserv.filterfor(stringy, "dc:title");
                        console.log(temptitle);
                        temptype = this.qserv.filterfor(stringy, "dc:type");
                        console.log(temptype);
                        tempcreator = this.qserv.filterfor(stringy, "dc:creator");
                        console.log(tempcreator);
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        console.log(tempbsid);
                        this.temparticle = { id: tempid, bestek: tempbestek, description: tempdescription, format: tempformat, language: templanguage, title: temptitle, type: temptype, creator: tempcreator, bsid: tempbsid, source: "0" };
                        return [2 /*return*/, this.temparticle];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticledetailboxComponent.prototype, "article", void 0);
    ArticledetailboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articledetailbox',
            template: __webpack_require__(/*! ./articledetailbox.component.html */ "./src/app/articledetailbox/articledetailbox.component.html"),
            styles: [__webpack_require__(/*! ./articledetailbox.component.css */ "./src/app/articledetailbox/articledetailbox.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_4__["QueryserviceService"]])
    ], ArticledetailboxComponent);
    return ArticledetailboxComponent;
}());



/***/ }),

/***/ "./src/app/articledetailboxedit/articledetailboxedit.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/articledetailboxedit/articledetailboxedit.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVkZXRhaWxib3hlZGl0L2FydGljbGVkZXRhaWxib3hlZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articledetailboxedit/articledetailboxedit.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/articledetailboxedit/articledetailboxedit.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n    body{\n      position:relative;\n    }\n    .whitespace {\n      float:left;\n      background-color: white;\n      border-style: solid;\n      border-color: gray;\n      border-width: 1px;\n      width: 60%;\n      margin-left: 2%;\n      margin-top: 0%;\n      min-height: 200px;\n    }\n    .helper {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      width: 100%;\n      min-height: 200px;\n      padding:20px;\n    }\n    td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n    }\n    table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n    }\n    .articledetails{\n      position: relative;\n      top: 10px;\n      left: 10px;\n    }\n    .button{\n      float: left;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      cursor: pointer;\n    }\n    .tooltipper{\n      float: left;\n      margin-top: 14px;\n      margin-left: 5%;\n    }\n    .tooltipper2{\n      float: left;\n      margin-top: 14px;\n      margin-left:20%;\n    }\n    .tooltipper .tooltip{\n      visibility: hidden;\n      background-color: #555;\n      color: #fff;\n      border-radius: 6px;\n      padding: 5px 0;\n      position: absolute;\n      z-index: 1;\n      opacity: 0;\n      transition: opacity 0.3s;\n    }\n    .tooltipper:hover .tooltip{\n      visibility: visible;\n      opacity: 1;\n    }\n    .showforum{\n      float: left;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      width: 95%;\n      text-align: center;\n      font-size:8px;\n      cursor:pointer;\n    }\n</style>\n\n<div class=\"helper\">\n    <table class=\"articledetails\">\n      <caption><b>Article Details</b></caption>\n      <tr>\n        <th width=\"10px\">BSID</th>\n        <th width=\"140px\"><input type=\"text\" [(ngModel)]=\"article.bsid\"></th>\n      </tr>\n      <tr>\n        <th>Title</th>\n        <th><input type=\"text\" [(ngModel)]=\"article.title\"></th>\n      </tr>\n      <tr>\n        <th>Language</th>\n        <th><input type=\"text\" [(ngModel)]=\"article.Language\"></th>\n      </tr>\n      <tr>\n        <th>Progress</th>\n        <th><input type=\"text\"></th>\n      </tr>\n      <tr>\n        <th>Original Author</th>\n        <th>{{article.creator}}</th>\n      </tr>\n      <tr>\n        <th>Type</th>\n        <th><input type=\"text\" [(ngModel)]=\"article.type\"></th>\n      </tr>\n      <tr>\n        <th>Version</th>\n        <th><input type=\"text\" [(ngModel)]=\"article.Version\"></th>\n      </tr>\n      <tr>\n        <th>Attachments</th>\n        <th><a href=\"\">examplerevitfamily.rfa</a> <button style=\"float:right;\">+</button></th>\n      </tr>\n    </table>\n    <br>\n    <span class=\"showforum\" (click)=\"showcomments()\"><b>{{buttonname}}</b>\n      <!---dropdown component comments of the article here-->\n    </span>\n  </div>\n  <div *ngIf=\"opencommenteditor\">\n    <app-commentinput [article]=\"this.article\"></app-commentinput>\n  </div>\n  <div *ngIf=\"openforum\">\n    <ul *ngFor=\"let comment of articlecomments\">\n      <app-singlecomment [comment]=\"comment\"></app-singlecomment>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/articledetailboxedit/articledetailboxedit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/articledetailboxedit/articledetailboxedit.component.ts ***!
  \************************************************************************/
/*! exports provided: ArticledetailboxeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticledetailboxeditComponent", function() { return ArticledetailboxeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");




var ArticledetailboxeditComponent = /** @class */ (function () {
    function ArticledetailboxeditComponent() {
        this.openforum = false;
        this.opencommenteditor = false;
        this.buttonname = "V";
        this.articlecomments = _commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"]; //temporary fix, refreshcommands does not seem to work as intended.
    }
    ArticledetailboxeditComponent.prototype.refreshcomments = function () {
        for (var i = 0; i < _commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"].length; i++) {
            if (_commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"][i].article.id == this.article.id) {
                this.articlecomments.push(_commentlist__WEBPACK_IMPORTED_MODULE_3__["commentlist"][i]);
            }
        }
    };
    ArticledetailboxeditComponent.prototype.showcomments = function () {
        this.openforum = !this.openforum;
        if (this.openforum) {
            this.buttonname = "V";
        }
        else {
            this.buttonname = "^";
        }
    };
    ArticledetailboxeditComponent.prototype.showcommentinput = function () {
        this.opencommenteditor = !this.opencommenteditor;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticledetailboxeditComponent.prototype, "article", void 0);
    ArticledetailboxeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articledetailboxedit',
            template: __webpack_require__(/*! ./articledetailboxedit.component.html */ "./src/app/articledetailboxedit/articledetailboxedit.component.html"),
            styles: [__webpack_require__(/*! ./articledetailboxedit.component.css */ "./src/app/articledetailboxedit/articledetailboxedit.component.css")]
        })
    ], ArticledetailboxeditComponent);
    return ArticledetailboxeditComponent;
}());



/***/ }),

/***/ "./src/app/articleedit/articleedit.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articleedit/articleedit.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVlZGl0L2FydGljbGVlZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articleedit/articleedit.component.html":
/*!********************************************************!*\
  !*** ./src/app/articleedit/articleedit.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n<style>\n  .container {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      border-color:black;\n      width: 70%;\n      min-height: 500px;\n      margin-left: 30px;\n      padding:30px;\n  }\n  .column{\n    float:left;\n    background-color: white;\n  }\n  .detailbox{\n    float:left;\n  }\n  .detailbox2{\n    float:left;\n    width: 327px;\n    height: 261px;\n    background-color:Salmon;\n    border-style: solid;\n    border-width: 1px;\n    border-color:black;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:16px;\n    text-align:center;\n  }\n  .button{\n    float: left;\n    padding: 5px;\n    margin-top: 4px;\n    background-color: salmon;\n    border-style: solid;\n    border-width: 1.5px;\n    border-color: black;\n    cursor: pointer;\n  }\n    .whitespace {\n      float:left;\n      background-color: white;\n      border-style: solid;\n      border-color: gray;\n      border-width: 1px;\n      width: 60%;\n      margin-left: 2%;\n      margin-top: 0%;\n      min-height: 200px;\n    }\n    .helper {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      width: 100%;\n      min-height: 200px;\n      padding:20px;\n    }\n    td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n    }\n    table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n    }\n    .articledetails{\n      position: relative;\n      top: 10px;\n      left: 10px;\n    }\n    .button2{\n      float: right;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      cursor: pointer;\n    }\n    .tooltipper{\n      float: left;\n      margin-top: 14px;\n      margin-left: 5%;\n    }\n    .tooltipper2{\n      float: left;\n      margin-top: 14px;\n      margin-left:20%;\n    }\n    .tooltipper .tooltip{\n      visibility: hidden;\n      background-color: #555;\n      color: #fff;\n      border-radius: 6px;\n      padding: 5px 0;\n      position: absolute;\n      z-index: 1;\n      opacity: 0;\n      transition: opacity 0.3s;\n    }\n    .tooltipper:hover .tooltip{\n      visibility: visible;\n      opacity: 1;\n    }\n    .showforum{\n      float: left;\n      padding: 5px;\n      margin-top: 4px;\n      background-color: salmon;\n      border-style: solid;\n      border-width: 1.5px;\n      border-color: black;\n      width: 95%;\n      text-align: center;\n      font-size:8px;\n      cursor:pointer;\n    }\n</style>\n\n<body>\n  <nav class=\"container\">\n    <nav class=\"column\">\n        <app-ngx-editor [spellcheck]=\"true\" [(ngModel)]=\"localdescription\"></app-ngx-editor>\n    </nav>\n</nav>\n<nav style=\"position:relative; float: left;\">\n<div class=\"helper\">\n  <table class=\"articledetails\">\n    <caption><b>Article Details</b></caption>\n    <tr>\n      <th width=\"10px\">BSID</th>\n      <th width=\"140px\"><input type=\"text\" [(ngModel)]=\"localbsid\"></th>\n    </tr>\n    <tr>\n      <th>Title</th>\n      <th><input type=\"text\" [(ngModel)]=\"localtitle\"></th>\n    </tr>\n    <tr>\n      <th>Language</th>\n      <th><input type=\"text\" [(ngModel)]=\"locallanguage\"></th>\n    </tr>\n    <tr>\n      <th>Progress</th>\n      <th><input type=\"text\"></th>\n    </tr>\n    <tr>\n      <th>Original Author</th>\n      <th>{{article.creator}}</th>\n    </tr>\n    <tr>\n      <th>Type</th>\n      <th><input type=\"text\" [(ngModel)]=\"localtype\"></th>\n    </tr>\n    <tr>\n      <th>Version</th>\n      <th><input type=\"text\" [(ngModel)]=\"localbestek\"></th>\n    </tr>\n    <tr>\n      <th>Attachments</th>\n      <th><a href=\"\">examplerevitfamily.rfa</a> <button class=\"button2\" style=\"float:right;\">+</button></th>\n    </tr>\n  </table>\n  <br>\n  <span class=\"showforum\" (click)=\"showcomments()\"><b>{{buttonname}}</b>\n    <!---dropdown component comments of the article here-->\n  </span>\n</div>\n<div *ngIf=\"opencommenteditor\">\n  <app-commentinput [article]=\"this.article\"></app-commentinput>\n</div>\n<div *ngIf=\"openforum\">\n  <ul *ngFor=\"let comment of articlecomments\">\n    <app-singlecomment [comment]=\"comment\"></app-singlecomment>\n  </ul>\n</div>\n</nav>\n\n<div class=\"detailbox2\">\n  <br>\n  <br>\n  <b>Add changelog</b><br>\n  <input type=\"text\" style=\"width:90%;margin-left:3%;height:100px;\" [(ngModel)]=\"localchangelog\">\n  <nav class=\"button\" style=\"margin-left:60px;margin-top:20px;\" (click)=\"newrequest()\" [style.background-color]=\"refreshed ? 'green' : 'red'\">Save as new</nav>\n  <nav class=\"button\" style=\"margin-top:20px;\" (click)=\"updaterequest()\" [style.background-color]=\"refreshed ? 'green' : 'red'\">Save as edit</nav>\n</div>\n</body>\n\n\n\n"

/***/ }),

/***/ "./src/app/articleedit/articleedit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articleedit/articleedit.component.ts ***!
  \******************************************************/
/*! exports provided: ArticleeditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleeditComponent", function() { return ArticleeditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articlelist */ "./src/app/articlelist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");







var ArticleeditComponent = /** @class */ (function () {
    function ArticleeditComponent(_route, qserv, auth) {
        this._route = _route;
        this.qserv = qserv;
        this.auth = auth;
        this.openforum = false;
        this.opencommenteditor = false;
        this.buttonname = "V";
        this.articlecomments = _commentlist__WEBPACK_IMPORTED_MODULE_5__["commentlist"]; //temporary fix, refreshcommands does not seem to work as intended.
    }
    ArticleeditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.refreshed = false;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this._route.params.subscribe(function (params) {
            _this.bestek = params['bestek'];
        });
        this._route.params.subscribe(function (params) {
            _this.type = params['type'];
        });
        this._route.params.subscribe(function (params) {
            _this.format = params['format'];
        });
        if (this.id === "" && this.bestek === "" && this.type === "" && this.format === "") {
            this.article = { id: "", bestek: "", type: "", title: "", format: "", bsid: "", language: "", description: "", creator: "", source: "" };
        }
        else {
            this._route.params.subscribe(function (params) {
                _this.article = _this.getbyid3(params['id'], params['bestek'], params['type'], params['format']);
            });
        }
        this.localchangelog = "";
        this.flushlocal();
    };
    ArticleeditComponent.prototype.updaterequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.alerter();
                        console.log(this.localbsid.replace(".", "").replace(".", "") + "0000".slice(0, 4 - this.localbsid.replace(".", "").replace(".", "").length));
                        return [4 /*yield*/, this.qserv.updatequery(this.localbestek, this.makeid(this.localbsid), this.localtype, this.localtitle, this.localcreator, this.localdescription, this.locallanguage, "updaterequest")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.qserv.createchangelog(this.localbestek, this.localtype, "updaterequest", this.localid, this.localchangelog)];
                    case 2:
                        _a.sent();
                        console.log("done:" + this.localdescription);
                        this.refreshed = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleeditComponent.prototype.newrequest = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: //zelfde, maar-> format= newrequest (voor nieuwe versies enzo)
                    return [4 /*yield*/, this.qserv.updatequery(this.localbestek, this.makeid(this.localbsid), this.localtype, this.localtitle, this.localcreator, this.localdescription, this.locallanguage, "newrequest")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.qserv.createchangelog(this.localbestek, this.localtype, "newrequest", this.localid, this.localchangelog)];
                    case 2:
                        _a.sent();
                        console.log("done:" + this.localdescription);
                        this.refreshed = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleeditComponent.prototype.alerter = function () {
        console.log(this.localbestek);
        console.log(this.localid);
        console.log(this.localtype);
        console.log(this.localtitle);
        console.log(this.localcreator);
        console.log(this.localdescription);
        console.log(this.locallanguage);
    };
    //al deze methods in qserv steken
    ArticleeditComponent.prototype.makeid = function (id) {
        var endid = id.replace(".", "").replace(".", "") + "0000".slice(0, 4 - id.replace(".", "").replace(".", "").length);
        return endid;
    };
    ArticleeditComponent.prototype.flushlocal = function () {
        this.localdescription = this.article.description;
        this.localbestek = this.article.bestek;
        this.locallanguage = this.article.language;
        this.localbsid = this.article.bsid;
        this.localcreator = this.auth.currentuser.username;
        this.localtitle = this.article.title,
            this.localtype = this.article.type;
        this.localid = this.article.id;
        this.localsource = this.article.source;
        this.localformat = this.article.format;
    };
    ArticleeditComponent.prototype.getbyid2 = function (id) {
        for (var i = 0; i < this.qserv.locallist.length + 1; i++) {
            if (this.qserv.locallist[i].id == this.id) {
                console.log(this.qserv.locallist[i].title + _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].id);
                return this.qserv.locallist[i];
            }
        }
    };
    ArticleeditComponent.prototype.getbyid3 = function (id, bestek, type, format) {
        if (bestek == "MLB") {
            for (var i = 0; i < this.qserv.locallist.length + 1; i++) {
                if (this.qserv.locallist[i].id == this.id) {
                    console.log(this.qserv.locallist[i].title + _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].id);
                    return this.qserv.locallist[i];
                }
            }
        }
        else {
            if (bestek == "PLB") {
                for (var i = 0; i < this.qserv.localPLBlist.length + 1; i++) {
                    if (this.qserv.localPLBlist[i].id == this.id) {
                        console.log(this.qserv.localPLBlist[i].title + _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].id);
                        return this.qserv.localPLBlist[i];
                    }
                }
            }
        }
    };
    ArticleeditComponent.prototype.refreshcomments = function () {
        for (var i = 0; i < _commentlist__WEBPACK_IMPORTED_MODULE_5__["commentlist"].length; i++) {
            if (_commentlist__WEBPACK_IMPORTED_MODULE_5__["commentlist"][i].article.id == this.article.id) {
                this.articlecomments.push(_commentlist__WEBPACK_IMPORTED_MODULE_5__["commentlist"][i]);
            }
        }
    };
    ArticleeditComponent.prototype.showcomments = function () {
        this.openforum = !this.openforum;
        if (this.openforum) {
            this.buttonname = "V";
        }
        else {
            this.buttonname = "^";
        }
        console.log(this.localdescription);
    };
    ArticleeditComponent.prototype.showcommentinput = function () {
        this.opencommenteditor = !this.opencommenteditor;
    };
    ArticleeditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articleedit',
            template: __webpack_require__(/*! ./articleedit.component.html */ "./src/app/articleedit/articleedit.component.html"),
            styles: [__webpack_require__(/*! ./articleedit.component.css */ "./src/app/articleedit/articleedit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _queryservice_service__WEBPACK_IMPORTED_MODULE_4__["QueryserviceService"], _auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], ArticleeditComponent);
    return ArticleeditComponent;
}());



/***/ }),

/***/ "./src/app/articlelist.ts":
/*!********************************!*\
  !*** ./src/app/articlelist.ts ***!
  \********************************/
/*! exports provided: articlelist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlelist", function() { return articlelist; });
var articlelist = [
    { format: "accepted", id: "0000", bsid: '00.', title: '0. MLB', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: 'akajaa', source: "0" },
    { format: "accepted", id: "0001", bsid: '00.01.', title: '0. TEST0001', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: 'fhdaugihojhgfyuhh', source: "0" },
    { format: "accepted", id: "0100", bsid: '01.', source: "0", title: '1. AANNEMINGSMODALITEITEN', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0px 0px 0px 40px; border: none; padding: 0px;"><span style="font-size: 20px;"><b><u>ALGEMEEN</u></b></span><b><u><br></u></b></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Deze bestektekst is opgemaakt volgens de typetekst van het Bouwtechnisch Bestek Woningbouw,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; zoals opgemaakt door de Vlaamse Maatschappij voor Sociaal Wonen (VMSW).</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In tegenstelling tot de vorige uitgaven van bestekken van de VMSW (B2001 en B2005) is het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bouwtechnisch Bestek Woningbouw GEEN verwijsbestek.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Onderhavig bestek is dus de enige bestektekst voor dit project.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bepalingen die door de architect zijn toegevoegd of gewijzigd t.o.v. het Bouwtechnisch Bestek</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Woningbouw zijn in een duidelijk herkenbare letter- en alineastijl opgemaakt.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien in artikels verwezen wordt naar andere artikels die door vergetelheid niet opgenomen zijn in</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dit bestek, is de overeenkomstige recentste beschrijving van deze artikels uit het Bouwtechnisch</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bestek Woningbouw van de VMSW van toepassing.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien tijdens de uitvoering van de werken nieuwe posten zouden moeten uitgevoerd worden, die</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; niet opgenomen zijn in onderhavig bestek, is de overeenkomstige recentste beschrijving van deze</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; posten uit het Bouwtechnisch Bestek Woningbouw van de VMSW van toepassing.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<u><b><span style="font-size: 20px; background-color: transparent;">MEETCHAR</span></b></u></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Naast elke artikeltitel staat een ‘meetchar’ die aangeeft welke meeteenheid en aard van</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; overeenkomst van toepassing is voor dat artikel.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien een tegenstrijdigheid tussen de meetchar en de paragraaf ‘Meting’ zou voorkomen in dit</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bestek heeft de tekst onder de paragraaf ‘Meting’ voorrang op de ‘meetchar’.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 20px; background-color: transparent;">&nbsp;<u><b>NORMEN</b></u></span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; De aannemer is behalve aan alle in het bestek vermelde normen onverminderd onderworpen aan de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bepalingen van de geldende normen NBN, technische voorschriften van de STS’en, TV’s (WTCB) en</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PTV’s (Probeton) zoals die drie maanden voor de aanbestedingsdatum werden gehomologeerd of</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; geregistreerd.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 20px; background-color: transparent;"><u><b>VERANTWOORDELIJKHEID</b></u></span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dit bestek vraagt in verschillende artikels om documenten ter goedkeuring voor te leggen aan de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ontwerper en/of het Bestuur. De goedkeuring door ontwerper en/of Bestuur ontslaat de aannemer</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; en leden van het ontwerpteam echter niet van hun volledige verantwoordelijkheid.</div>' },
    { format: "accepted", id: "0100", bsid: '01.11.', source: "100", title: '1.1. aannemingsmodaliteiten - algemeen', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div></div></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><span style="font-size: 20px;"><u><b>ALGEMEEN</b></u></span></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Deze bestektekst is opgemaakt volgens de typetekst van het Bouwtechnisch Bestek Woningbouw,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; zoals opgemaakt door de Vlaamse Maatschappij voor Sociaal Wonen (VMSW).</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In tegenstelling tot de vorige uitgaven van bestekken van de VMSW (B2001 en B2005) is het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bouwtechnisch Bestek Woningbouw GEEN verwijsbestek.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Onderhavig bestek is dus de enige bestektekst voor dit project.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bepalingen die door de architect zijn toegevoegd of gewijzigd t.o.v. het Bouwtechnisch Bestek</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Woningbouw zijn in een duidelijk herkenbare letter- en alineastijl opgemaakt.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien in artikels verwezen wordt naar andere artikels die door vergetelheid niet opgenomen zijn in</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dit bestek, is de overeenkomstige recentste beschrijving van deze artikels uit het Bouwtechnisch</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Bestek Woningbouw van de VMSW van toepassing.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien tijdens de uitvoering van de werken nieuwe posten zouden moeten uitgevoerd worden, die</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; niet opgenomen zijn in onderhavig bestek, is de overeenkomstige recentste beschrijving van deze</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; posten uit het Bouwtechnisch Bestek Woningbouw van de VMSW van toepassing.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><span style="font-size: 20px;"><u><b>MEETCHAR</b></u></span></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Naast elke artikeltitel staat een ‘meetchar’ die aangeeft welke meeteenheid en aard van</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; overeenkomst van toepassing is voor dat artikel.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Indien een tegenstrijdigheid tussen de meetchar en de paragraaf ‘Meting’ zou voorkomen in dit</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bestek heeft de tekst onder de paragraaf ‘Meting’ voorrang op de ‘meetchar’.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><span style="font-size: 20px;"><u><b>NORMEN</b></u></span></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; De aannemer is behalve aan alle in het bestek vermelde normen onverminderd onderworpen aan de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bepalingen van de geldende normen NBN, technische voorschriften van de STS’en, TV’s (WTCB) en</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; PTV’s (Probeton) zoals die drie maanden voor de aanbestedingsdatum werden gehomologeerd of</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; geregistreerd.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><span style="font-size: 20px;"><u><b>VERANTWOORDELIJKHEID</b></u></span></blockquote></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dit bestek vraagt in verschillende artikels om documenten ter goedkeuring voor te leggen aan de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ontwerper en/of het Bestuur. De goedkeuring door ontwerper en/of Bestuur ontslaat de aannemer</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; en leden van het ontwerpteam echter niet van hun volledige verantwoordelijkheid.</div></blockquote>' },
    { format: "accepted", id: "0110", bsid: '01.10.', source: "110", title: '1.1.1 plaatsbeschrijvingen – algemeen', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>De plaatsbeschrijvingen omvatten een volledige en nauwkeurige weergave van de toestand waarin</div></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; eigendommen, zowel roerend als onroerend, zich bevinden op het ogenblik van het onderzoek. Dit</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; betreft alle eigendommen en openbare domeinen die op een of andere wijze nadelige invloeden</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; zouden kunnen ondergaan door de uitvoering van de werken.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 20px; background-color: transparent;"><b><u>Uitvoering</u></b></span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • De tegensprekelijke plaatsbeschrijvingen en de vergelijkende beschrijvingen worden opgemaakt</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; door een beëdigd onafhankelijk expert, aangesteld door de aannemer. Hij zal minstens veertien</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; dagen op voorhand, door middel van een aangetekend schrijven, de eigenaar(s) van de te</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bezoeken panden de dag en het uur meedelen voor het plaatsbezoek. Hij zal hen in dit schrijven</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ook verzoeken om zich eventueel te laten bijstaan door een raadsman of deskundige om het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; tegensprekelijk karakter van de vaststellingen te verzekeren. Een kopie van dit schrijven wordt</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; naar het Bestuur en de architect verstuurd.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Voor de aanvang van de werken wordt een kopie van de door alle betrokken partijen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ondertekende plaatsbeschrijving(en) aan alle betrokken partijen en het Bestuur overhandigd.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Bij het einde van de werken wordt een tegensprekelijke staat van vergelijking opgemaakt met</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de vaststelling van de mogelijke schade t.o.v. de toestand vermeld in de plaatsbeschrijvingen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bij de aanvang van de werken. De aannemer moet de vastgestelde beschadigingen herstellen of</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de schade vergoeden.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Vóór de voorlopige oplevering overhandigt hij de opdrachtgever de schriftelijke verklaringen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; van de betrokken eigenaars dat ze ofwel geen schade hebben geleden ofwel dat de schade werd</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; hersteld en/of vergoed.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • De plaatsbeschrijving zal bestaan uit</div><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  een nauwkeurige tekstuele beschrijving</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  een visualisering van de bestaande situatie d.m.v. foto’s of video</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  een ontvangstmelding en door de eigenaar(s) voor akkoord ondertekend exemplaar</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  het eindrapport beslaat een geschreven tekst met vermelding van de wijzigingen t.o.v. de</div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>&nbsp; &nbsp; originele plaatsbeschrijving, aangevuld met foto’s van de gebeurlijke schadegevallen.</div></blockquote></blockquote>' },
    { format: "accepted", id: "0120", bsid: '01.02.', source: "100", title: '1.2. aannemingsmodaliteiten – materialen', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div>De aannemer legt op vraag van de architect of het Bestuur bij aanvang van de werken en/of</div></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; minstens 15 dagen voor iedere levering of verwerking een lijst ter goedkeuring voor van alle te</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gebruiken materialen en systemen, samen met bijhorende representatieve stalen, kleurkaarten,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; technische fiches en eventueel voorgeschreven keuringsattesten. Wanneer dit gevraagd wordt, zal</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de aannemer de materialen, voor de aanvang van de werken, laten beproeven.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 20px; background-color: transparent;"><u><b>Materialen</b></u></span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • De materialen worden zoveel mogelijk in recycleerbare verpakkingen geleverd. Het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; verpakkingsmateriaal wordt systematisch gesorteerd op de werf. Vlarema is van toepassing.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • De aannemer toont aan de hand van de veiligheidsfiche (Safety Data Sheet) of de technische</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; fiche aan dat er bij de productie van de gebruikte materialen geen stoffen voorkomen die als</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; schadelijk beschouwd worden door de Europese richtlijn 67/548/EEC.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • Afwerkingsmaterialen en -producten die in contact staan met de binnenomgeving van het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gebouw mogen geen stoffen bevatten die kankerverwekkend (R40, R45, R49), mutageen (R46,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; R68), schadelijk of giftig voor de voortplanting (R60, R61, R62, R63) of toxisch (R23, R24, R25,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; R26, R27, R28) zijn. Hierbij wordt verwezen naar de Europese Verordening (EG) nr. 1272/2008.</div>' },
    { format: "accepted", id: "0130", bsid: '01.03.', source: "100", title: '1.3. aannemingsmodaliteiten – voorafgaand werfbezoek', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div></div></blockquote><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div><span style="font-size: 20px; background-color: transparent;"><b><u>Omschrijving</u></b></span></div></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Door het feit dat hij zijn offerte indient, erkent de inschrijver dat hij ter plaatse is geweest en zich</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; op de hoogte heeft gesteld van de bestaande toestand van de bouwplaats, de ligging, de omgeving</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; en de toegangswegen. Hierdoor wordt de inschrijver geacht zich volledig rekenschap te hebben</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gegeven van de omvang van de aanneming en de moeilijkheidsgraad van de uit te voeren werken,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; m.b.t.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de algemene coördinatie van de werken</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de inrichting van de bouwplaats</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de gemeentelijke voorschriften en nutsleidingen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de noodzakelijke veiligheidsvoorzieningen op de werf</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de mogelijkheden tot de aanvoer en het stockeren van bouwmaterialen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • het plaatsen van stellingen</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de opstelling van aangepast materieel (graafmachines, kranen, …)</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de eventuele voorafgaande sloopwerken</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; • de gebeurlijke aanbouw tegen en de bijhorende afwerkingen van scheidingsmuren of bestaande</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; constructies, ….</div>' },
    { format: "accepted", id: "0200", bsid: '02.', source: "0", title: '2. BOUWPLAATSVOORZIENINGEN', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<div></div><blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div><span style="font-size: 20px; background-color: transparent;"><b><u>Omschrijving</u></b></span></div></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; De voorbereidende werkzaamheden voor de inrichting van de bouwplaats omvatten alle</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; administratieve en organisatorische maatregelen en technische middelen om de werken volgens de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; bepalingen van het aanbestedingsdossier mogelijk te maken en dit overeenkomstig de omvang van</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; de opdracht, de moeilijkheidsgraad en de eisen van veiligheid en hygiëne.</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Alle bedrijfsmiddelen, zoals materieel, energie, water, communicatiemiddelen, transport, e.d.,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; alsook de (voorlopige) aansluiting aan de installaties van algemeen nut, de nodige vergunningen,</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; vergoedingen of borgstellingen nodig voor de verwezenlijking van de aanneming zijn standaard</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; inbegrepen in de eenheidsprijs. Dit geldt tevens voor alle deelaspecten van de inrichting van de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; werf, behalve indien de aanbestedingsdocumenten voor sommige van deze artikelen uitdrukkelijk</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; een afzonderlijke post zouden voorzien.</div><div><br></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-size: 20px; background-color: transparent;"><b><u>Uitvoering</u></b></span></div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; De inrichting en organisatie van de bouwplaats gebeurt voor de aanvang van de werken en volledig</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; op kosten van de aannemer. De concrete planning hiervan wordt volledig overgelaten aan het</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; initiatief en de verantwoordelijkheid van de aannemer, tenzij het bestek specifieke voorschriften</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; oplegt. Het Bestuur kan steeds een schetsmatig voorstel van de geplande inrichting opvragen ter</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; goedkeuring.</div>' },
    { format: "accepted", id: "0210", bsid: '02.10.', source: "200", title: '2.1 beschermingswerken - openbare wegen', language: 'Dutch', bestek: 'MLB', type: 'official', creator: 'Temp_user', description: '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><div></div><span style="font-size: 20px;"><b><u>Openbare wegen</u></b></span><div>De bestaande openbare wegen en voetpaden moeten op doelmatige wijze beschermd worden tegen</div></blockquote><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; iedere gebeurlijke beschadiging. Er mogen geen materialen of afval op de openbare weg worden</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; gestapeld en het verkeer mag niet onnodig worden belemmerd. De geldende politionele</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; verordeningen hierover moeten opgevolgd worden. Bij eventuele schade zal de aannemer op zijn</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; kosten de bestaande uitvoering volledig herstellen, voor de voorlopige oplevering. Bijkomende</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; herstellingswerken die na de oplevering nodig zouden zijn, zullen door de opdrachtgever op de</div><div>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; aannemer worden verhaald.</div>' },
    { format: "accepted", id: "0120", bsid: '01.20.', source: "110", title: '1.1.2 plaatsbeschrijvingen - secundair', language: 'Dutch', description: '', bestek: 'MLB', type: 'official', creator: 'Temp_user' }
];


/***/ }),

/***/ "./src/app/articlerequest/articlerequest.component.css":
/*!*************************************************************!*\
  !*** ./src/app/articlerequest/articlerequest.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVyZXF1ZXN0L2FydGljbGVyZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articlerequest/articlerequest.component.html":
/*!**************************************************************!*\
  !*** ./src/app/articlerequest/articlerequest.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n<style>\n  .container {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      border-color:black;\n      width: 70%;\n      min-height: 500px;\n      margin-left: 30px;\n      padding:30px;\n  }\n  .whitespace{\n    float:left;\n    background-color: white;\n    width:750px;\n    height:70px;\n    border-color:black;\n    border-style:solid;\n    border-width:1px;\n  }\n  .detailbox{\n    float:left;\n  }\n  .detailbox2{\n    float:left;\n    width: 327px;\n    height: 261px;\n    background-color:Salmon;\n    border-style: solid;\n    border-width: 1px;\n    border-color:black;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:16px;\n    text-align:center;\n  }\n  .button{\n    float: left;\n    padding: 5px;\n    margin-top: 4px;\n    background-color: salmon;\n    border-style: solid;\n    border-width: 1.5px;\n    border-color: black;\n    cursor: pointer;\n  }\n  .firstnavbar{\n    float:left;\n    width:100px;\n    background-color:Salmon;\n    height:100px;\n    border-color:black;\n    border-width:1px;\n    border-style:solid;\n  }\n  .secondnavbar{\n    float:left;\n    width:190px;\n    background-color:Salmon;\n    height:100px;\n    border-color:black;\n    border-width:1px;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n  }\n  table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n  }\n  .approvalbutton{\n    float:left;\n    width: 43.7%;\n    background-color:Salmon;\n    height:40px;\n    border-color:black;\n    border-width:1px;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  .thirdnavbar{\n    float:left;\n    width:800px;\n    background-color:Salmon;\n    height:100px;\n    border-color:black;\n    border-width:1px;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n  .superbutton{\n    float:left;\n    width: 100px;\n    background-color:tomato;\n    height:30px;\n    border-color:black;\n    border-width:2px;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n    cursor: pointer;\n  }\n  .superbutton2{\n    float:left;\n    width: 200px;\n    background-color:tomato;\n    height:30px;\n    border-color:black;\n    border-width:2px;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n    cursor: pointer;\n  }\n</style>\n\n<body>\n  <nav class=\"firstnavbar\" style=\"margin-left:40px;\">\n    <a [routerLink]=\"['/userinfo']\">\n    <img src=\"{{user.picture}}\" style=\"width:90px;height:90px;padding:5px;\">\n    </a>\n  </nav>\n  <nav class=\"secondnavbar\">\n    <table style=\"margin-left:10px;margin-top:17px\">\n      <tr>\n        <th>User</th>\n        <th>{{user.username}}</th>\n      </tr>\n      <tr>\n        <th>Role</th>\n        <th>{{user.role}}</th>\n      </tr>\n      <tr>\n        <th>Contact</th>\n        <th></th>\n      </tr>\n    </table>\n  </nav>\n  <nav class=\"thirdnavbar\">\n    <br>\n    <div class=\"whitespace\" style=\"margin-left:10px;\">{{changelogtext}}</div>\n  </nav>\n  <div class=\"approvalbutton\" style=\"margin-left:38px;\">\n    <button class=\"superbutton\" style=\"margin-left:90px; margin-top:4px;\" (click)=\"approve()\"><font color=\"black\"><b>approve</b></font></button>\n    <button class=\"superbutton\" style=\"margin-left:40px; margin-top:4px;\" (click)=\"disapprove()\"><font color=\"black\"><b>disapprove</b></font></button>\n  </div>\n  <div *ngIf=\"exist\" class=\"approvalbutton\" style=\"margin-left:30px;\">\n    <button class=\"superbutton2\" style=\"margin-left:78px; margin-top:4px;\" (click)=\"keepcurrent()\"><font color=\"black\"><b>Keep current version</b></font></button>\n  </div>\n  <div style=\"margin-top:10px;\"><app-articlesinglerequest [article]=\"article\"></app-articlesinglerequest></div>\n  \n  <div *ngIf=\"exist\" style=\"margin-left:-10px;\"><app-articlesinglerequest [article]=\"officialarticle\"></app-articlesinglerequest></div>\n</body>\n"

/***/ }),

/***/ "./src/app/articlerequest/articlerequest.component.ts":
/*!************************************************************!*\
  !*** ./src/app/articlerequest/articlerequest.component.ts ***!
  \************************************************************/
/*! exports provided: ArticlerequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlerequestComponent", function() { return ArticlerequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articlelist */ "./src/app/articlelist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userlist */ "./src/app/userlist.ts");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");








var ArticlerequestComponent = /** @class */ (function () {
    function ArticlerequestComponent(router, _route, qserv) {
        this.router = router;
        this._route = _route;
        this.qserv = qserv;
        this.comment = _commentlist__WEBPACK_IMPORTED_MODULE_5__["commentlist"][2];
    }
    ArticlerequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this._route.params.subscribe(function (params) {
            _this.bestek = params['bestek'];
        });
        this._route.params.subscribe(function (params) {
            _this.type = params['type'];
        });
        this._route.params.subscribe(function (params) {
            _this.format = params['format'];
        });
        this._route.params.subscribe(function (params) {
            _this.article = _this.getbyid3(params['id'], params['bestek'], params['type'], params['format']);
        });
        this.getchangelog(this.bestek, this.type, this.format, this.id);
        this.getuser();
        this.exist = true;
        this.getofficial(this.id, this.bestek, this.type);
    };
    ArticlerequestComponent.prototype.approve = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, temptype, bool;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(this.article.bestek);
                        console.log(this.article.id);
                        console.log(this.article.type);
                        console.log(this.article.format);
                        console.log(this.officialarticle.bestek);
                        console.log(this.officialarticle.id);
                        console.log(this.officialarticle.type);
                        console.log(this.officialarticle.format);
                        if (!(this.article.format === "newrequest")) return [3 /*break*/, 1];
                        this.qserv.updatequery(this.article.bestek, this.article.id, this.article.type, this.article.title, this.article.creator, this.article.description, this.article.language, "accepted");
                        //flush this.officialarticle and update with properties of this.article
                        this.qserv.flush(this.article.bestek, this.article.id, this.article.type, this.article.format);
                        return [3 /*break*/, 7];
                    case 1:
                        if (!(this.article.type === this.officialarticle.type)) return [3 /*break*/, 6];
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < 20)) return [3 /*break*/, 5];
                        temptype = this.officialarticle.type.toString() + "_oldversion_" + i.toString();
                        console.log(temptype);
                        return [4 /*yield*/, this.qserv.existcheck(this.officialarticle.bestek, temptype, this.officialarticle.id, this.officialarticle.format)];
                    case 3:
                        bool = _a.sent();
                        console.log(bool);
                        if (bool) {
                            console.log("if");
                            return [3 /*break*/, 4];
                        }
                        else {
                            console.log("else");
                            this.newtype = this.officialarticle.type.toString() + "_oldversion_" + i.toString();
                            return [3 /*break*/, 5];
                        }
                        _a.label = 4;
                    case 4:
                        i++;
                        return [3 /*break*/, 2];
                    case 5:
                        console.log(this.newtype);
                        this.qserv.updatequery(this.officialarticle.bestek, this.officialarticle.id, this.newtype, this.officialarticle.title, this.officialarticle.creator, this.officialarticle.description, this.officialarticle.language, this.officialarticle.format);
                        //create version "old" of this.officialarticle (oldversion+i) with i being the number from 0 to 10, doing existchecks for every old
                        this.qserv.flush(this.officialarticle.bestek, this.officialarticle.id, this.officialarticle.type, this.officialarticle.format);
                        this.qserv.updatequery(this.article.bestek, this.article.id, this.article.type, this.article.title, this.article.creator, this.article.description, this.article.language, "accepted");
                        //flush this.officialarticle and update with properties of this.article
                        this.qserv.flush(this.article.bestek, this.article.id, this.article.type, this.article.format);
                        //flush this.article
                        this.qserv.provgiver(this.article.bestek, this.article.type, "accepted", this.article.id, this.officialarticle.bestek, this.newtype, this.officialarticle.format, this.officialarticle.id);
                        return [3 /*break*/, 7];
                    case 6:
                        this.qserv.updatequery(this.article.bestek, this.article.id, this.article.type, this.article.title, this.article.creator, this.article.description, this.article.language, "accepted");
                        //flush this.officialarticle and update with properties of this.article
                        this.qserv.flush(this.article.bestek, this.article.id, this.article.type, this.article.format);
                        this.qserv.provgiver(this.article.bestek, this.article.type, "accepted", this.article.id, this.officialarticle.bestek, this.officialarticle.type, this.officialarticle.format, this.officialarticle.id);
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    ArticlerequestComponent.prototype.disapprove = function () {
        this.qserv.flush(this.article.bestek, this.article.id, this.article.type, this.article.format);
        this.router.navigateByUrl('/manager');
        console.log("disapprove succeed");
    };
    ArticlerequestComponent.prototype.keepcurrent = function () {
    };
    ArticlerequestComponent.prototype.getofficial = function (id, bestek, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.existcheck(bestek, "official", id, "accepted")];
                    case 1:
                        if (_a.sent()) {
                            this.officialarticle = this.getbyid3(id, bestek, "official", "accepted");
                        }
                        else {
                            this.officialarticle = { bestek: "", id: "", description: "", bsid: "", source: "", language: "", title: "", type: "", creator: "", format: "" };
                            this.exist = false;
                        }
                        console.log(this.officialarticle.description);
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlerequestComponent.prototype.getbyid = function (id) {
        for (var i = 0; i < _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"].length; i++) {
            if (Number(_articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].id) == Number(this.id)) {
                console.log(_articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].title + _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i].id);
                return _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"][i];
            }
        }
    };
    ArticlerequestComponent.prototype.getuser = function () {
        for (var i = 0; i < _userlist__WEBPACK_IMPORTED_MODULE_4__["userlist"].length; i++) {
            if (_userlist__WEBPACK_IMPORTED_MODULE_4__["userlist"][i].username == this.article.creator) {
                this.user = _userlist__WEBPACK_IMPORTED_MODULE_4__["userlist"][i];
            }
        }
    };
    ArticlerequestComponent.prototype.getchangelog = function (bestek, type, format, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qserv.returnchangelog(bestek, type, format, id)];
                    case 1:
                        _a.changelogtext = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticlerequestComponent.prototype.getbyid3 = function (id, bestek, type, format) {
        if (format == "accepted") {
            if (bestek == "MLB") {
                for (var i = 0; i < this.qserv.locallist.length + 1; i++) {
                    if (this.qserv.locallist[i].id == this.id) {
                        return this.qserv.locallist[i];
                    }
                }
            }
            else {
                if (bestek == "PLB") {
                    for (var i = 0; i < this.qserv.localPLBlist.length + 1; i++) {
                        if (this.qserv.localPLBlist[i].id == this.id) {
                            return this.qserv.localPLBlist[i];
                        }
                    }
                }
            }
        }
        else {
            if (format == "updaterequest") {
                for (var i = 0; i < this.qserv.localupdaterequestlist.length + 1; i++) {
                    if (this.qserv.localupdaterequestlist[i].id == this.id && this.qserv.localupdaterequestlist[i].bestek == bestek && this.qserv.localupdaterequestlist[i].type == type) {
                        return this.qserv.localupdaterequestlist[i];
                    }
                }
            }
            if (format == "newrequest") {
                for (var i = 0; i < this.qserv.localnewrequestlist.length + 1; i++) {
                    if (this.qserv.localnewrequestlist[i].id == this.id && this.qserv.localnewrequestlist[i].bestek == bestek && this.qserv.localnewrequestlist[i].type == type) {
                        return this.qserv.localnewrequestlist[i];
                    }
                }
            }
        }
    };
    ArticlerequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlerequest',
            template: __webpack_require__(/*! ./articlerequest.component.html */ "./src/app/articlerequest/articlerequest.component.html"),
            styles: [__webpack_require__(/*! ./articlerequest.component.css */ "./src/app/articlerequest/articlerequest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _queryservice_service__WEBPACK_IMPORTED_MODULE_6__["QueryserviceService"]])
    ], ArticlerequestComponent);
    return ArticlerequestComponent;
}());



/***/ }),

/***/ "./src/app/articlesinglerequest/articlesinglerequest.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/articlesinglerequest/articlesinglerequest.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzaW5nbGVyZXF1ZXN0L2FydGljbGVzaW5nbGVyZXF1ZXN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articlesinglerequest/articlesinglerequest.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/articlesinglerequest/articlesinglerequest.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n\n<style>\n.container {\n      float:left;\n      background-color:Salmon;\n      border-style: solid;\n      border-width: 1px;\n      border-color:black;\n      width: 40%;\n      min-height: 500px;\n      margin-left: 30px;\n      padding:30px;\n  }\n  .whitespace{\n    float:left;\n    background-color: white;\n    width:750px;\n    height:70px;\n    border-color:black;\n    border-style:solid;\n    border-width:1px;\n  }\n  .articledetails{\n    width:93%;\n    margin-left:3%;\n    border-style:solid;\n    border-color:black;\n    border-width:2px;\n    height:170px;\n  }\n  td, th {\n    border: 1px solid gray;\n    text-align: left;\n    padding: 5px;\n    background-color: white;\n    font-size: 10px;\n    width:fit-content;\n  }\n  table{\n      font-family: arial, sans-serif;\n      border-collapse: collapse;\n      margin-left:2px;\n      margin-top:2px;\n      margin-bottom:2px;\n  }\n  .button{\n    float: left;\n    padding: 5px;\n    margin-top: 4px;\n    background-color: salmon;\n    border-style: solid;\n    border-width: 1.5px;\n    border-color: black;\n    cursor: pointer;\n    margin-left:50px;\n  }\n  .description{\n    background-color: white;\n  }\n</style>\n\n<body>\n  <div class=\"container\">\n    <div class=\"articledetails\">\n      <nav style=\"float:left;\">\n      <table>\n        <tr>\n          <th>BSID</th>\n          <th><input type=\"text\" [(ngModel)]=\"article.bsid\" style=\"width:200px;\"></th>\n        </tr>\n        <tr>\n          <th>Title</th>\n          <th><input type=\"text\" [(ngModel)]=\"article.title\" style=\"width:200px;\"></th>\n        </tr>\n        <tr>\n          <th>Language</th>\n          <th><input type=\"text\" [(ngModel)]=\"article.language\" style=\"width:200px;\"></th>\n        </tr>\n        <tr>\n          <th>Progress</th>\n          <th><input type=\"text\" style=\"width:200px;\"></th>\n        </tr>\n        <tr>\n          <th>Last revision</th>\n          <th><input type=\"text\" style=\"width:200px;\"></th>\n        </tr>\n      </table>\n      </nav>\n    </div>\n    <div class=\"description\">\n      <app-ngx-editor [placeholder]=\"article.description\" [spellcheck]=\"true\" [(ngModel)]=\"article.description\"></app-ngx-editor>\n    </div>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/articlesinglerequest/articlesinglerequest.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/articlesinglerequest/articlesinglerequest.component.ts ***!
  \************************************************************************/
/*! exports provided: ArticlesinglerequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesinglerequestComponent", function() { return ArticlesinglerequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");



var ArticlesinglerequestComponent = /** @class */ (function () {
    function ArticlesinglerequestComponent() {
    }
    ArticlesinglerequestComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticlesinglerequestComponent.prototype, "article", void 0);
    ArticlesinglerequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlesinglerequest',
            template: __webpack_require__(/*! ./articlesinglerequest.component.html */ "./src/app/articlesinglerequest/articlesinglerequest.component.html"),
            styles: [__webpack_require__(/*! ./articlesinglerequest.component.css */ "./src/app/articlesinglerequest/articlesinglerequest.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ArticlesinglerequestComponent);
    return ArticlesinglerequestComponent;
}());



/***/ }),

/***/ "./src/app/articlesingleview/articlesingleview.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/articlesingleview/articlesingleview.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGVzaW5nbGV2aWV3L2FydGljbGVzaW5nbGV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articlesingleview/articlesingleview.component.html":
/*!********************************************************************!*\
  !*** ./src/app/articlesingleview/articlesingleview.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n<style>\n  body{\n    position:relative;\n  }\n  .whitespace {\n    float:left;\n    background-color: white;\n    border-style: solid;\n    border-color: gray;\n    border-width: 1px;\n    width: 60%;\n    margin-left: 2%;\n    margin-top: 0%;\n    min-height: 220px;\n  }\n  .helper {\n    float:left;\n    background-color:Salmon;\n    border-style: solid;\n    border-width: 1px;\n    width: 17%;\n    min-height: 200px;\n  }\n  td, th {\n  border: 1px solid gray;\n  text-align: left;\n  padding: 5px;\n  background-color: white;\n  font-size: 10px;\n  }\n  table{\n    font-family: arial, sans-serif;\n    border-collapse: collapse;\n  }\n  .articledetails{\n    position: relative;\n    top: 10px;\n    left: 10px;\n  }\n</style>\n\n<body>\n  <span class=\"whitespace\">\n    <div [innerHTML]=\"article.description\"></div>\n  </span>\n  <app-articledetailbox [article]=\"article\"></app-articledetailbox>\n</body>\n\n"

/***/ }),

/***/ "./src/app/articlesingleview/articlesingleview.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/articlesingleview/articlesingleview.component.ts ***!
  \******************************************************************/
/*! exports provided: ArticlesingleviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlesingleviewComponent", function() { return ArticlesingleviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");



var ArticlesingleviewComponent = /** @class */ (function () {
    function ArticlesingleviewComponent() {
    }
    ArticlesingleviewComponent.prototype.ngOnInit = function () {
        console.log(this.article.id);
        console.log(this.article.title);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_2__["Article"])
    ], ArticlesingleviewComponent.prototype, "article", void 0);
    ArticlesingleviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articlesingleview',
            template: __webpack_require__(/*! ./articlesingleview.component.html */ "./src/app/articlesingleview/articlesingleview.component.html"),
            styles: [__webpack_require__(/*! ./articlesingleview.component.css */ "./src/app/articlesingleview/articlesingleview.component.css")]
        })
    ], ArticlesingleviewComponent);
    return ArticlesingleviewComponent;
}());



/***/ }),

/***/ "./src/app/articleview/articleview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/articleview/articleview.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGV2aWV3L2FydGljbGV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/articleview/articleview.component.html":
/*!********************************************************!*\
  !*** ./src/app/articleview/articleview.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n  <style>\n    .nobullets{\n      list-style-type: none;\n    }\n  </style>\n</head>\n\n<li class=\"nobullets\" *ngFor=\"let article of articlesarray\">\n  <app-articlesingleview [article]=\"article\"></app-articlesingleview>\n</li>\n"

/***/ }),

/***/ "./src/app/articleview/articleview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/articleview/articleview.component.ts ***!
  \******************************************************/
/*! exports provided: ArticleviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleviewComponent", function() { return ArticleviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ArticleviewComponent = /** @class */ (function () {
    function ArticleviewComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ArticleviewComponent.prototype, "articlesarray", void 0);
    ArticleviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articleview',
            template: __webpack_require__(/*! ./articleview.component.html */ "./src/app/articleview/articleview.component.html"),
            styles: [__webpack_require__(/*! ./articleview.component.css */ "./src/app/articleview/articleview.component.css")]
        })
    ], ArticleviewComponent);
    return ArticleviewComponent;
}());



/***/ }),

/***/ "./src/app/articleviewer/articleviewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/articleviewer/articleviewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGV2aWV3ZXIvYXJ0aWNsZXZpZXdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/articleviewer/articleviewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/articleviewer/articleviewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"startapp\">\n  <app-articlesingleview [article]=\"this.article\"></app-articlesingleview>\n  \n</p>\n"

/***/ }),

/***/ "./src/app/articleviewer/articleviewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/articleviewer/articleviewer.component.ts ***!
  \**********************************************************/
/*! exports provided: ArticleviewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleviewerComponent", function() { return ArticleviewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../articlelist */ "./src/app/articlelist.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");





var ArticleviewerComponent = /** @class */ (function () {
    function ArticleviewerComponent(_route, qserv) {
        this._route = _route;
        this.qserv = qserv;
        this.startapp = false;
    }
    ArticleviewerComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this._route.params.subscribe(function (params) {
                            _this.id = params['id'];
                        });
                        this._route.params.subscribe(function (params) {
                            _this.bestek = params['bestek'];
                        });
                        this._route.params.subscribe(function (params) {
                            _this.type = params['type'];
                        });
                        this._route.params.subscribe(function (params) {
                            _this.format = params['format'];
                        });
                        if (!(this.type == "official")) return [3 /*break*/, 1];
                        this._route.params.subscribe(function (params) {
                            _this.article = _this.getbyid3(params['id'], params['bestek'], params['type'], params['format']);
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.getbyidalternate(this.id, this.bestek, this.type, this.format)];
                    case 2:
                        _a.article = _b.sent();
                        _b.label = 3;
                    case 3:
                        this.startapp = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleviewerComponent.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.qserv.flushlist();
                        return [4 /*yield*/, this.qserv.localarticlelist("MLB", "official", "accepted")];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleviewerComponent.prototype.getbyid = function (id) {
        for (var i = 0; i < _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"].length; i++) {
            if (_articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].id == this.id) {
                console.log(_articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].id);
                console.log(_articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].title);
                return _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i];
            }
        }
    };
    ArticleviewerComponent.prototype.getbyid2 = function (id) {
        for (var i = 0; i < this.qserv.locallist.length + 1; i++) {
            if (this.qserv.locallist[i].id == this.id) {
                console.log(this.qserv.locallist[i].title + _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].id);
                return this.qserv.locallist[i];
            }
        }
    };
    ArticleviewerComponent.prototype.getbyidalternate = function (id, bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uri, stringy, tempid, tempbestek, tempdescription, tempformat, templanguage, temptitle, temptype, tempcreator, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uri = "<http://example/" + bestek + "/" + type + "/" + format + "/" + id + ">";
                        return [4 /*yield*/, this.qserv.describequery(uri)];
                    case 1:
                        stringy = _a.sent();
                        console.log(stringy);
                        tempid = this.qserv.filterfor(stringy, "dc:identifier");
                        console.log(tempid);
                        tempbestek = bestek;
                        console.log(tempbestek);
                        tempdescription = this.qserv.filterfor(stringy, "dc:description");
                        console.log(tempdescription);
                        tempformat = this.qserv.filterfor(stringy, "dc:format");
                        console.log(tempformat);
                        templanguage = this.qserv.filterfor(stringy, "dc:language");
                        console.log(templanguage);
                        temptitle = this.qserv.filterfor(stringy, "dc:title");
                        console.log(temptitle);
                        temptype = this.qserv.filterfor(stringy, "dc:type");
                        console.log(temptype);
                        tempcreator = this.qserv.filterfor(stringy, "dc:creator");
                        console.log(tempcreator);
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        console.log(tempbsid);
                        this.temparticle = { id: tempid, bestek: tempbestek, description: tempdescription, format: tempformat, language: templanguage, title: temptitle, type: temptype, creator: tempcreator, bsid: tempbsid, source: "0" };
                        return [2 /*return*/, this.temparticle];
                }
            });
        });
    };
    ArticleviewerComponent.prototype.getbyid3 = function (id, bestek, type, format) {
        if (format == "accepted") {
            if (bestek == "MLB") {
                for (var i = 0; i < this.qserv.locallist.length + 1; i++) {
                    if (this.qserv.locallist[i].id == this.id) {
                        return this.qserv.locallist[i];
                    }
                }
            }
            else {
                if (bestek == "PLB") {
                    for (var i = 0; i < this.qserv.localPLBlist.length + 1; i++) {
                        if (this.qserv.localPLBlist[i].id == this.id) {
                            return this.qserv.localPLBlist[i];
                        }
                    }
                }
            }
        }
        else {
            if (format == "updaterequest") {
                for (var i = 0; i < this.qserv.localupdaterequestlist.length + 1; i++) {
                    if (this.qserv.localupdaterequestlist[i].id == this.id && this.qserv.localupdaterequestlist[i].bestek == bestek && this.qserv.localupdaterequestlist[i].type == type) {
                        return this.qserv.localupdaterequestlist[i];
                    }
                }
            }
            if (format == "newrequest") {
                for (var i = 0; i < this.qserv.localnewrequestlist.length + 1; i++) {
                    if (this.qserv.localnewrequestlist[i].id == this.id && this.qserv.localnewrequestlist[i].bestek == bestek && this.qserv.localnewrequestlist[i].type == type) {
                        return this.qserv.localnewrequestlist[i];
                    }
                }
            }
        }
    };
    ArticleviewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-articleviewer',
            template: __webpack_require__(/*! ./articleviewer.component.html */ "./src/app/articleviewer/articleviewer.component.html"),
            styles: [__webpack_require__(/*! ./articleviewer.component.css */ "./src/app/articleviewer/articleviewer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _queryservice_service__WEBPACK_IMPORTED_MODULE_4__["QueryserviceService"]])
    ], ArticleviewerComponent);
    return ArticleviewerComponent;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userlist */ "./src/app/userlist.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.currentuser = { id: 0, username: "", picture: "../assets/dummyimages/architect.jpg", password: "", role: "" };
        this.usersource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](this.currentuser);
    }
    AuthService.prototype.getUserDetails = function () {
        return this.usersource.asObservable();
    };
    AuthService.prototype.login = function (username, password) {
        for (var i = 0; i < _userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"].length; i++) {
            if (_userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"][i].username == username && _userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"][i].password == password) {
                this.changeuser(_userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"][i]);
                this.currentuser = _userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"][i];
                break;
            }
            else {
                continue;
            }
        }
        console.log(this.currentuser);
    };
    AuthService.prototype.changeuser = function (usercurrent) {
        this.usersource.next(usercurrent);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/browserfool/browserfool.component.css":
/*!*******************************************************!*\
  !*** ./src/app/browserfool/browserfool.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3dzZXJmb29sL2Jyb3dzZXJmb29sLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/browserfool/browserfool.component.html":
/*!********************************************************!*\
  !*** ./src/app/browserfool/browserfool.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n"

/***/ }),

/***/ "./src/app/browserfool/browserfool.component.ts":
/*!******************************************************!*\
  !*** ./src/app/browserfool/browserfool.component.ts ***!
  \******************************************************/
/*! exports provided: BrowserfoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserfoolComponent", function() { return BrowserfoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrowserfoolComponent = /** @class */ (function () {
    function BrowserfoolComponent() {
    }
    BrowserfoolComponent.prototype.ngOnInit = function () {
    };
    BrowserfoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-browserfool',
            template: __webpack_require__(/*! ./browserfool.component.html */ "./src/app/browserfool/browserfool.component.html"),
            styles: [__webpack_require__(/*! ./browserfool.component.css */ "./src/app/browserfool/browserfool.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrowserfoolComponent);
    return BrowserfoolComponent;
}());



/***/ }),

/***/ "./src/app/comment.ts":
/*!****************************!*\
  !*** ./src/app/comment.ts ***!
  \****************************/
/*! exports provided: Comment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Comment", function() { return Comment; });
var Comment = /** @class */ (function () {
    function Comment() {
    }
    return Comment;
}());



/***/ }),

/***/ "./src/app/commentinput/commentinput.component.css":
/*!*********************************************************!*\
  !*** ./src/app/commentinput/commentinput.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbW1lbnRpbnB1dC9jb21tZW50aW5wdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/commentinput/commentinput.component.html":
/*!**********************************************************!*\
  !*** ./src/app/commentinput/commentinput.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n.testclass{\n  text-align: left;\n  position:inherit;\n  float: right;\n  background-color: lightgray;\n  padding: 3px;\n  border-color: black;\n  border-width: 1px;\n  border-style:solid;\n  width:246px;\n  height:fit-content;\n  min-height: 40px;\n}\n.text{\n  text-align: left;\n  font-size: 8px;\n  font-family: Arial, Helvetica, sans-serif;\n  position:absolute;\n}\n</style>\n\n<body>\n  <div class=\"testclass\">\n    <form (submit)=\"sendcomment($event)\">\n      <input type=\"text\" placeholder=\"comment\" id=\"comment\" [(ngModel)]=\"newcommentcontent\" [ngModelOptions]=\"{standalone: true}\">\n      <input type=\"submit\" Value=\"Submit\">\n    </form>\n  </div>\n</body>\n"

/***/ }),

/***/ "./src/app/commentinput/commentinput.component.ts":
/*!********************************************************!*\
  !*** ./src/app/commentinput/commentinput.component.ts ***!
  \********************************************************/
/*! exports provided: CommentinputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentinputComponent", function() { return CommentinputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");
/* harmony import */ var _article__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article */ "./src/app/article.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");





var CommentinputComponent = /** @class */ (function () {
    function CommentinputComponent(auth) {
        this.auth = auth;
    }
    CommentinputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserDetails().subscribe(function (usercurrent) { return _this.usercurrent = usercurrent; });
    };
    CommentinputComponent.prototype.sendcomment = function (event) {
        console.log(this.newcommentcontent);
        this.newcomment = { user: this.usercurrent, content: this.newcommentcontent, time: "15/02/2019", article: this.article };
        _commentlist__WEBPACK_IMPORTED_MODULE_2__["commentlist"].push(this.newcomment);
        //create new comment here
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _article__WEBPACK_IMPORTED_MODULE_3__["Article"])
    ], CommentinputComponent.prototype, "article", void 0);
    CommentinputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-commentinput',
            template: __webpack_require__(/*! ./commentinput.component.html */ "./src/app/commentinput/commentinput.component.html"),
            styles: [__webpack_require__(/*! ./commentinput.component.css */ "./src/app/commentinput/commentinput.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CommentinputComponent);
    return CommentinputComponent;
}());



/***/ }),

/***/ "./src/app/commentlist.ts":
/*!********************************!*\
  !*** ./src/app/commentlist.ts ***!
  \********************************/
/*! exports provided: commentlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commentlist", function() { return commentlist; });
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist */ "./src/app/userlist.ts");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./articlelist */ "./src/app/articlelist.ts");


var commentlist = [
    { user: _userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][1], time: "11:34.22/01/2019", content: "testcomment: Do you see me?", article: _articlelist__WEBPACK_IMPORTED_MODULE_1__["articlelist"][1] },
    { user: _userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][2], time: "11:36.22/01/2019", content: "testcomment: Yes, i see you", article: _articlelist__WEBPACK_IMPORTED_MODULE_1__["articlelist"][1] },
    { user: _userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][0], time: "11:36.22/01/2019", content: "Created this new article", article: _articlelist__WEBPACK_IMPORTED_MODULE_1__["articlelist"][0] }
];


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<head>\r\n  <meta charset=\"utf-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\r\n  <style>\r\n    * {\r\n      box-sizing: border-box;\r\n    }\r\n\r\n    body {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n\r\n    header {\r\n      background-color: orangered;\r\n      padding: 10px;\r\n      text-align: center;\r\n      font-size: 35px;\r\n      color: white;\r\n    }\r\n\r\n    nav {\r\n      padding: 0px;\r\n      background-color: tomato;\r\n      height: 100px;\r\n    }\r\n\r\n    .box {\r\n      width: 100%;\r\n      height: 180px;\r\n      background-color: tomato;\r\n    }\r\n\r\n    .home {\r\n      float:left;\r\n      width: 10%;\r\n      overflow:hidden;\r\n      \r\n    }\r\n\r\n    .lastenboekbutton {\r\n      float: left;\r\n      width: 200px;\r\n      overflow: hidden;\r\n    }\r\n\r\n    .browserbutton {\r\n      float:left;\r\n      margin-top: 10px;\r\n      width: 20%;\r\n      height: 565px;\r\n      overflow: auto;\r\n    }\r\n\r\n    .notification {\r\n      float: right;\r\n      width: 10%;\r\n      overflow:hidden;\r\n    }\r\n\r\n    article {\r\n      float: right;\r\n      padding: 0px;\r\n      width: 25%;\r\n      background-color: tomato;\r\n      height: 100px;\r\n    }\r\n\r\n    section:after {\r\n      content: \"\";\r\n      display: table;\r\n      clear: both;\r\n    }\r\n\r\n    @media (max-width: 600px) {\r\n      nav, article {\r\n        width: 100%;\r\n        height: auto;\r\n      }\r\n    }\r\n\r\n    div {\r\n      height: 20px;\r\n      margin-left: 0px;\r\n      width:20%;\r\n    }\r\n\r\n    .fool {\r\n      position:absolute;\r\n      margin-top: -27px;\r\n    }\r\n    \r\n    .browserfool {\r\n      background-color: tomato;\r\n      border-width: 2px;\r\n      border-color: black;\r\n      border-style: solid;\r\n      margin-left: 6px;\r\n      margin-bottom: 6px;\r\n      width: 100%;\r\n      cursor: pointer;\r\n    }\r\n\r\n    .toshoworhide {\r\n      position:unset;\r\n    }\r\n\r\n  </style>\r\n</head>\r\n\r\n\r\n\r\n<body class=\"box\">\r\n  <header>Building Specification App</header>\r\n  <section>\r\n    <nav class=\"home\">\r\n      <app-dashboardhome></app-dashboardhome>\r\n    </nav>\r\n    <nav class=\"lastenboekbutton\">\r\n      <app-dashboardplb></app-dashboardplb>\r\n    </nav>\r\n    <nav class=\"lastenboekbutton\">\r\n      <app-dashboardmlb></app-dashboardmlb>\r\n    </nav>\r\n    <nav class=\"lastenboekbutton\">\r\n      <app-dashboardnewarticle></app-dashboardnewarticle>\r\n    </nav>\r\n    <nav class=\"lastenboekbutton\">\r\n      <app-dashboardmanager></app-dashboardmanager>\r\n    </nav>\r\n    <article>\r\n      <app-dashboardlogin></app-dashboardlogin>\r\n    </article>\r\n    <nav class=\"notification\">\r\n      <app-dashboardnotification></app-dashboardnotification>\r\n    </nav>\r\n    \r\n  </section>\r\n  <section *ngIf=\"show\">\r\n    <nav class=\"browserbutton\">\r\n      <app-dashboardbrowser></app-dashboardbrowser>\r\n    </nav>\r\n  </section>\r\n</body>\r\n<div class=\"fool\">\r\n  <button class=\"browserfool\" (click)=\"hidebrowser()\">{{buttonName}}</button>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, qserv) {
        this.router = router;
        this.qserv = qserv;
        this.show = true;
        this.buttonName = "Hide browser";
        if (router.url === 'http://localhost:4200/userinfo') {
            this.show = false;
        }
        console.log(router.url);
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.hidebrowser = function () {
        this.show = !this.show;
        if (this.show) {
            this.buttonName = "Hide browser";
        }
        else {
            this.buttonName = "Show browser";
        }
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _queryservice_service__WEBPACK_IMPORTED_MODULE_3__["QueryserviceService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboardbrowser/dashboardbrowser.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboardbrowser/dashboardbrowser.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZGJyb3dzZXIvZGFzaGJvYXJkYnJvd3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboardbrowser/dashboardbrowser.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboardbrowser/dashboardbrowser.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n<head>\n    <meta name=\"viewportbrowser\" content=\"width=device-width, initial-scale=1\">\n    <style>\n      ul, #myUL {\n        list-style-type: none;\n      }\n      #myUL {\n        margin: 0;\n        padding: 0;\n      }\n      .caret {\n        cursor: pointer;\n        -webkit-user-select: none; /* Safari 3.1+ */\n        -moz-user-select: none; /* Firefox 2+ */\n        -ms-user-select: none; /* IE 10+ */\n        user-select: none;\n      }\n      .caret::before {\n        content: \"\\25B6\";\n        color: black;\n        display: inline-block;\n        margin-right: 3px;\n      }\n      .caret-down::before {\n        -ms-transform: rotate(90deg); /* IE 9 */\n        -webkit-transform: rotate(90deg); /* Safari */\n        transform: rotate(90deg);\n      }\n      .nested {\n        display:none;\n      }\n      .active {\n        display:block;\n      }\n      .bodied {\n        background-color: salmon;\n        border-width: 2px;\n        border-color: black;\n        border-style: solid;\n      }\n      .button {\n        background-color: tomato;\n        border-width: 2px;\n        border-color: black;\n        border-style: solid;\n        margin-left: 6px;\n        margin-bottom: 6px;\n        cursor: pointer;\n      }\n      .browser{\n        margin-left:-20px;\n      }\n    </style>\n</head>\n\n<body class=\"bodied\">\n  <h3>Building specification</h3>\n  <button class=\"button\" (click)=\"openall(nodes)\">open all</button>\n  <button class=\"button\" (click)=\"closeall(nodes)\">close all</button>\n  <button class=\"button\" [style.background-color]=\"refreshed ? 'green' : 'red'\" (click)=\"refresh($event)\">refresh</button>\n  <div class=\"browser\">\n    <app-recursivebrowser></app-recursivebrowser>\n  </div>\n  \n  \n</body>\n\n"

/***/ }),

/***/ "./src/app/dashboardbrowser/dashboardbrowser.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboardbrowser/dashboardbrowser.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardbrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardbrowserComponent", function() { return DashboardbrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node.service */ "./src/app/node.service.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");




var DashboardbrowserComponent = /** @class */ (function () {
    function DashboardbrowserComponent(nodeservice, qserv) {
        this.qserv = qserv;
    }
    DashboardbrowserComponent.prototype.openall = function (nodes) {
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var pregnantnode = nodes_1[_i];
            pregnantnode.expanded = true;
            this.openall(pregnantnode.nodes);
        }
    };
    DashboardbrowserComponent.prototype.closeall = function (nodes) {
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var pregnantnode = nodes_2[_i];
            pregnantnode.expanded = false;
            this.closeall(pregnantnode.nodes);
        }
    };
    DashboardbrowserComponent.prototype.loadTable = function () {
    };
    DashboardbrowserComponent.prototype.ngOnInit = function () {
        this.loadTable();
        addEvents();
    };
    DashboardbrowserComponent.prototype.refresh = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.refreshed = false;
                        return [4 /*yield*/, this.qserv.getlist()];
                    case 1:
                        _a.sent();
                        this.refreshed = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    DashboardbrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardbrowser',
            template: __webpack_require__(/*! ./dashboardbrowser.component.html */ "./src/app/dashboardbrowser/dashboardbrowser.component.html"),
            styles: [__webpack_require__(/*! ./dashboardbrowser.component.css */ "./src/app/dashboardbrowser/dashboardbrowser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _queryservice_service__WEBPACK_IMPORTED_MODULE_3__["QueryserviceService"]])
    ], DashboardbrowserComponent);
    return DashboardbrowserComponent;
}());

function addEvents() {
    var toggler = document.getElementsByClassName("caret");
    var i;
    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
        });
    }
}


/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZGhvbWUvZGFzaGJvYXJkaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\r\n\r\n<style>\r\n  nav {\r\n    float: left;\r\n    padding: 10px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n  }\r\n</style>\r\n<body>\r\n  <a [routerLink]=\"['/home']\">\r\n    <nav>\r\n      <img src=\"../assets/images/home.png\" alt=\"home\" style=\"width:60px;height:60px;border:0;\" />\r\n    </nav>\r\n  </a>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboardhome/dashboardhome.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboardhome/dashboardhome.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardhomeComponent", function() { return DashboardhomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardhomeComponent = /** @class */ (function () {
    function DashboardhomeComponent() {
    }
    DashboardhomeComponent.prototype.ngOnInit = function () {
    };
    DashboardhomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardhome',
            template: __webpack_require__(/*! ./dashboardhome.component.html */ "./src/app/dashboardhome/dashboardhome.component.html"),
            styles: [__webpack_require__(/*! ./dashboardhome.component.css */ "./src/app/dashboardhome/dashboardhome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardhomeComponent);
    return DashboardhomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboardlogin/dashboardlogin.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboardlogin/dashboardlogin.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZGxvZ2luL2Rhc2hib2FyZGxvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboardlogin/dashboardlogin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboardlogin/dashboardlogin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  body {\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    color: white;\r\n    border-width: 2px;\r\n    border-style: solid;\r\n    border-color: black;\r\n    background-color: salmon;\r\n    margin-top: 8px;\r\n  }\r\n  div {\r\n    background-color: salmon;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    margin-top: 3px;\r\n    margin-bottom: 3px;\r\n  }\r\n  nav {\r\n    background-color: salmon;\r\n    margin-left: 20px;\r\n    margin-right: 20px;\r\n    border: 5px solid Salmon;\r\n    text-align: center;\r\n\r\n  }\r\n</style>\r\n<body>\r\n  <div *ngIf=\"usercurrent\">\r\n    <span><br />Logged in as:</span>{{usercurrent.username}}\r\n  </div>\r\n  <div *ngIf=\"usercurrent\">\r\n    <span>Role:</span>{{usercurrent.role}}\r\n  </div>\r\n  <nav>\r\n    <span>\r\n      <a [routerLink]=\"['/login']\">\r\n        Log in\r\n      </a>\r\n    </span>\r\n  </nav>\r\n</body>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboardlogin/dashboardlogin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboardlogin/dashboardlogin.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardloginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardloginComponent", function() { return DashboardloginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var DashboardloginComponent = /** @class */ (function () {
    function DashboardloginComponent(auth) {
        this.auth = auth;
    }
    DashboardloginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUserDetails().subscribe(function (usercurrent) { return _this.usercurrent = usercurrent; });
    };
    DashboardloginComponent.prototype.ngOnDestroy = function () {
        //this.subscription.unsubscribe();
    };
    //
    DashboardloginComponent.prototype.ngOnChanges = function () {
        console.log(this.usercurrent);
    };
    DashboardloginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardlogin',
            template: __webpack_require__(/*! ./dashboardlogin.component.html */ "./src/app/dashboardlogin/dashboardlogin.component.html"),
            styles: [__webpack_require__(/*! ./dashboardlogin.component.css */ "./src/app/dashboardlogin/dashboardlogin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], DashboardloginComponent);
    return DashboardloginComponent;
}());



/***/ }),

/***/ "./src/app/dashboardmanager/dashboardmanager.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/dashboardmanager/dashboardmanager.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZG1hbmFnZXIvZGFzaGJvYXJkbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboardmanager/dashboardmanager.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboardmanager/dashboardmanager.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  nav {\r\n    float: left;\r\n    padding: 10px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n  }\r\n</style>\r\n<body>\r\n</body>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboardmanager/dashboardmanager.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboardmanager/dashboardmanager.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardmanagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardmanagerComponent", function() { return DashboardmanagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardmanagerComponent = /** @class */ (function () {
    function DashboardmanagerComponent() {
    }
    DashboardmanagerComponent.prototype.ngOnInit = function () {
    };
    DashboardmanagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardmanager',
            template: __webpack_require__(/*! ./dashboardmanager.component.html */ "./src/app/dashboardmanager/dashboardmanager.component.html"),
            styles: [__webpack_require__(/*! ./dashboardmanager.component.css */ "./src/app/dashboardmanager/dashboardmanager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardmanagerComponent);
    return DashboardmanagerComponent;
}());



/***/ }),

/***/ "./src/app/dashboardmlb/dashboardmlb.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboardmlb/dashboardmlb.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZG1sYi9kYXNoYm9hcmRtbGIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboardmlb/dashboardmlb.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboardmlb/dashboardmlb.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  nav {\r\n    float: left;\r\n    padding: 10px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n  }\r\n</style>\r\n<body>\r\n  <a [routerLink]=\"['/moederlastenboek']\">\r\n    <nav>\r\n      <img src=\"../assets/images/moederlastenboek.png\" alt=\"moederlastenboek\" style=\"width:60px;height:60px;border:0;\" />\r\n    </nav>\r\n  </a>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/dashboardmlb/dashboardmlb.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboardmlb/dashboardmlb.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardmlbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardmlbComponent", function() { return DashboardmlbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardmlbComponent = /** @class */ (function () {
    function DashboardmlbComponent() {
    }
    DashboardmlbComponent.prototype.ngOnInit = function () {
    };
    DashboardmlbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardmlb',
            template: __webpack_require__(/*! ./dashboardmlb.component.html */ "./src/app/dashboardmlb/dashboardmlb.component.html"),
            styles: [__webpack_require__(/*! ./dashboardmlb.component.css */ "./src/app/dashboardmlb/dashboardmlb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardmlbComponent);
    return DashboardmlbComponent;
}());



/***/ }),

/***/ "./src/app/dashboardnewarticle/dashboardnewarticle.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboardnewarticle/dashboardnewarticle.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZG5ld2FydGljbGUvZGFzaGJvYXJkbmV3YXJ0aWNsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboardnewarticle/dashboardnewarticle.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboardnewarticle/dashboardnewarticle.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n\n<style>\n  nav {\n    float: left;\n    padding: 10px;\n    margin-top: 4px;\n    background-color: salmon;\n    border-style: solid;\n    border-width: 2px;\n    border-color: black;\n  }\n</style>\n<body>\n  <a [routerLink]=\"['/edit',getthisbestek(),getthistype(),getthisformat(),getthisid()]\">\n    <nav>\n      <img src=\"../assets/images/plus.png\" alt=\"home\" style=\"width:60px;height:60px;border:0;\" />\n    </nav>\n  </a>\n</body>"

/***/ }),

/***/ "./src/app/dashboardnewarticle/dashboardnewarticle.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboardnewarticle/dashboardnewarticle.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardnewarticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardnewarticleComponent", function() { return DashboardnewarticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardnewarticleComponent = /** @class */ (function () {
    function DashboardnewarticleComponent() {
    }
    DashboardnewarticleComponent.prototype.ngOnInit = function () {
    };
    DashboardnewarticleComponent.prototype.getthisid = function () {
        return "";
    };
    DashboardnewarticleComponent.prototype.getthisbestek = function () {
        return "";
    };
    DashboardnewarticleComponent.prototype.getthistype = function () {
        return "";
    };
    DashboardnewarticleComponent.prototype.getthisformat = function () {
        return "";
    };
    DashboardnewarticleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardnewarticle',
            template: __webpack_require__(/*! ./dashboardnewarticle.component.html */ "./src/app/dashboardnewarticle/dashboardnewarticle.component.html"),
            styles: [__webpack_require__(/*! ./dashboardnewarticle.component.css */ "./src/app/dashboardnewarticle/dashboardnewarticle.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardnewarticleComponent);
    return DashboardnewarticleComponent;
}());



/***/ }),

/***/ "./src/app/dashboardnotification/dashboardnotification.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/dashboardnotification/dashboardnotification.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZG5vdGlmaWNhdGlvbi9kYXNoYm9hcmRub3RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboardnotification/dashboardnotification.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/dashboardnotification/dashboardnotification.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  nav {\r\n    float: right;\r\n    padding: 3px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: black;\r\n    position:relative;\r\n  }\r\n  .imagetext{\r\n    color: white;\r\n    float:left;\r\n  }\r\n\r\n</style>\r\n<body>\r\n\r\n  <a [routerLink]=\"['/manager']\">\r\n    \r\n    <nav>\r\n      <div class=\"imagetext\">{{newarticleslist.length}}</div>\r\n      <img src=\"../assets/images/article.png\" alt=\"article\" style=\"width:25px;height:25px;border:0;\" />\r\n    </nav>\r\n    <nav>\r\n      <div class=\"imagetext\">{{updatearticleslist.length}}</div>\r\n      <img src=\"../assets/images/update.png\" alt=\"article\" style=\"width:25px;height:25px;border:0;\" />\r\n    </nav>\r\n    <nav>\r\n      <div class=\"imagetext\">{{newcommentlist.length}}</div>\r\n      <img src=\"../assets/images/comment.png\" alt=\"comment\" style=\"width:25px;height:25px;border:0;\" />\r\n    </nav>\r\n    <nav>\r\n      <img src=\"../assets/images/notification.png\" alt=\"notification\" style=\"width:25px;height:25px;border:0;\" />\r\n    </nav>\r\n  </a>\r\n  <app-dashboarduser></app-dashboarduser>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/dashboardnotification/dashboardnotification.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/dashboardnotification/dashboardnotification.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashboardnotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardnotificationComponent", function() { return DashboardnotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");



var DashboardnotificationComponent = /** @class */ (function () {
    function DashboardnotificationComponent(qserv) {
        this.newarticleslist = qserv.localnewrequestlist;
        this.updatearticleslist = qserv.localupdaterequestlist;
        this.newcommentlist = []; //aanpassen eens comments gebeurt is
    }
    DashboardnotificationComponent.prototype.ngOnInit = function () {
    };
    DashboardnotificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardnotification',
            template: __webpack_require__(/*! ./dashboardnotification.component.html */ "./src/app/dashboardnotification/dashboardnotification.component.html"),
            styles: [__webpack_require__(/*! ./dashboardnotification.component.css */ "./src/app/dashboardnotification/dashboardnotification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_2__["QueryserviceService"]])
    ], DashboardnotificationComponent);
    return DashboardnotificationComponent;
}());



/***/ }),

/***/ "./src/app/dashboardplb/dashboardplb.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dashboardplb/dashboardplb.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHBsYi9kYXNoYm9hcmRwbGIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dashboardplb/dashboardplb.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboardplb/dashboardplb.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  nav {\r\n    float: left;\r\n    padding: 10px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 2px;\r\n    border-color: black;\r\n  }\r\n</style>\r\n<body>\r\n  <a [routerLink]=\"['/projectlastenboek']\">\r\n    <nav>\r\n      <img src=\"../assets/images/projectlastenboek.png\" alt=\"projectlastenboek\" style=\"width:60px;height:60px;border:0;\" />\r\n    </nav>\r\n  </a>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/dashboardplb/dashboardplb.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboardplb/dashboardplb.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardplbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardplbComponent", function() { return DashboardplbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardplbComponent = /** @class */ (function () {
    function DashboardplbComponent() {
    }
    DashboardplbComponent.prototype.ngOnInit = function () {
    };
    DashboardplbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboardplb',
            template: __webpack_require__(/*! ./dashboardplb.component.html */ "./src/app/dashboardplb/dashboardplb.component.html"),
            styles: [__webpack_require__(/*! ./dashboardplb.component.css */ "./src/app/dashboardplb/dashboardplb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardplbComponent);
    return DashboardplbComponent;
}());



/***/ }),

/***/ "./src/app/dashboarduser/dashboarduser.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dashboarduser/dashboarduser.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZHVzZXIvZGFzaGJvYXJkdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dashboarduser/dashboarduser.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboarduser/dashboarduser.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n  nav {\r\n    float: right;\r\n    padding: 3px;\r\n    margin-top: 4px;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-width: 1px;\r\n    border-color: black;\r\n  }\r\n</style>\r\n<body>\r\n  <a [routerLink]=\"['/userinfo']\">\r\n    <nav>\r\n      <img src=\"../assets/images/user.png\" alt=\"user\" style=\"width:25px;height:25px;border:0;\" />\r\n    </nav>\r\n  </a>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/dashboarduser/dashboarduser.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboarduser/dashboarduser.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboarduserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboarduserComponent", function() { return DashboarduserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboarduserComponent = /** @class */ (function () {
    function DashboarduserComponent() {
    }
    DashboarduserComponent.prototype.ngOnInit = function () {
    };
    DashboarduserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboarduser',
            template: __webpack_require__(/*! ./dashboarduser.component.html */ "./src/app/dashboarduser/dashboarduser.component.html"),
            styles: [__webpack_require__(/*! ./dashboarduser.component.css */ "./src/app/dashboarduser/dashboarduser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboarduserComponent);
    return DashboarduserComponent;
}());



/***/ }),

/***/ "./src/app/exportnavigator/exportnavigator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/exportnavigator/exportnavigator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4cG9ydG5hdmlnYXRvci9leHBvcnRuYXZpZ2F0b3IuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/exportnavigator/exportnavigator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/exportnavigator/exportnavigator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  body {\n    float: left;\n  }\n  \n  .navbar{\n    width: 1150px;\n    margin-left:20px;\n    background-color: Salmon;\n    height: 100px;\n    border-style: solid;\n    border-width: 1px;\n    border-color: black;\n  }\n  \n  .specificationinfo{\n    margin-left: 4px;\n    margin-top: 4px;\n    text-align: left;\n    font-family: arial, sans-serif;\n    font-size:14px;\n    width: 40%;\n    float:left;\n  }\n  .textinfo{\n    border-collapse: collapse;\n    font-family: arial, sans-serif;\n  }\n  td,th{\n    border-style: solid;\n    border-width: 1px;\n    border-color: gray;\n    background-color:white;\n    text-align: left;\n    min-width: 100px;\n  }\n  .secondth{\n    text-align: center;\n  }\n  .button{\n    border-style: solid;\n    border-width: 1px;\n    border-color: black;\n    background-color: Salmon;\n    text-align:center;\n    padding: 4px;\n    margin-right: 5px;\n    margin-top: 5px;\n    width:90%;\n  }\n  .buttons{\n    width: 20%;\n    float:right;\n  }\n</style>\n\n<body>\n  <nav class=\"navbar\">\n    <section class=\"specificationinfo\">\n      <table>\n        <tr>\n          <th>Total articles in PLB</th>\n          <th class=\"secondth\">{{plblength}}</th>\n        </tr>\n        <tr>\n          <th>Articles left out from MLB</th>\n          <th class=\"secondth\">{{mlblength-plblength}}</th>\n        </tr>\n        <tr>\n          <th>Unfinished articles</th>\n          <th></th>\n        </tr>\n        <tr>\n          <th>Old articles</th>\n          <th></th>\n        </tr>\n      </table>\n    </section>\n    <section class=\"buttons\">\n      <button class=\"button\">\n        <b>Export</b>\n      </button>\n      <button class=\"button\">\n        <b>Read</b>\n      </button>\n    </section>\n  </nav>\n</body>\n  \n"

/***/ }),

/***/ "./src/app/exportnavigator/exportnavigator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/exportnavigator/exportnavigator.component.ts ***!
  \**************************************************************/
/*! exports provided: ExportnavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportnavigatorComponent", function() { return ExportnavigatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articlelist */ "./src/app/articlelist.ts");



var ExportnavigatorComponent = /** @class */ (function () {
    function ExportnavigatorComponent() {
        this.mlblength = _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"].length;
        this.plblength = 0;
    }
    ExportnavigatorComponent.prototype.ngOnInit = function () {
    };
    ExportnavigatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exportnavigator',
            template: __webpack_require__(/*! ./exportnavigator.component.html */ "./src/app/exportnavigator/exportnavigator.component.html"),
            styles: [__webpack_require__(/*! ./exportnavigator.component.css */ "./src/app/exportnavigator/exportnavigator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExportnavigatorComponent);
    return ExportnavigatorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.6.3/css/all.css\" integrity=\"sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/\" crossorigin=\"anonymous\">\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(recordservice, http, qserv) {
        this.recordservice = recordservice;
        this.http = http;
        this.qserv = qserv;
    }
    HomeComponent.prototype.filterinfo = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.qserv.filterproperty("MLB", "official", "0101", "dc:language", "accepted")];
                    case 1:
                        _a.word = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.listcreator = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.existcheck("MLB", "official", "0001", "accepted")];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        this.word = "success";
                        return [4 /*yield*/, this.qserv.getlist()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.word = "fail";
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.cando = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, options, url, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe \* where {?s dc:title \"testfilter\"} limit 10");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        options = { headers: headers, responseType: 'text' };
                        url = "http://128.199.58.129:7200/repositories/repo";
                        _a = this;
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                console.log(response.toString());
                                return response.toString();
                            })];
                    case 1:
                        _a.word = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.comunica = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, options, url, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe \* where {?s dc:title ?o}");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        options = { headers: headers, responseType: 'text' };
                        url = "http://128.199.58.129:7200/repositories/repo";
                        _a = this;
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                console.log(response.toString());
                                return response.toString();
                            })];
                    case 1:
                        _a.word = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.insert = function (event) {
        var body = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Ainsert+data+%7B%3Chttp%3A%2F%2Fexample%2Ftestartikel2%3E+dc%3Atitle+%220011+testartikel%22%7D%3B%0A";
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        return this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { console.log(response.toString()); }); //here is no response, it is null, so this is giving the error, but not lethal at least :p
    };
    HomeComponent.prototype.shower = function (event) {
        this.qserv.updatequery("PLB", "0006", "official", "testfilterPLB0006", "creator", "eeooeeoeooo", "English", "accepted");
    };
    HomeComponent.prototype.rdtest = function (event) {
        this.qserv.flush("PLB", "0007.000", "official", "updaterequest");
    };
    HomeComponent.prototype.dingske = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var tempuri, tempresult, altarticles, count, i, j, firstchar, lastchar, firsturi, firstarticle, endchar, lengthy;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        tempuri = "<http://example/PLB/official/accepted/0010>";
                        return [4 /*yield*/, this.qserv.describequery(tempuri)];
                    case 1:
                        tempresult = _a.sent();
                        altarticles = [];
                        count = (tempresult.match(/prov:alternateof/g) || []).length;
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < count)) return [3 /*break*/, 7];
                        console.log(i);
                        console.log(tempresult);
                        j = 0;
                        _a.label = 3;
                    case 3:
                        if (!(j < 120)) return [3 /*break*/, 6];
                        if (!tempresult.slice(tempresult.search("prov:alternateof") - j, tempresult.search("prov:alternateof")).includes("<http://example")) return [3 /*break*/, 5];
                        firstchar = tempresult.search("prov:alternateof") - j;
                        lastchar = tempresult.slice(firstchar).search("prov:alternateof") - 1;
                        firsturi = tempresult.slice(firstchar, firstchar + lastchar);
                        console.log(firsturi);
                        return [4 /*yield*/, this.getbyuri(firsturi)];
                    case 4:
                        firstarticle = _a.sent();
                        altarticles.push(firstarticle); //segment van provs weghalen uit stringy en loop opnieuw
                        endchar = tempresult.slice(firstchar + lastchar + 23).search("<http://example");
                        lengthy = firstchar + lastchar + 23 + endchar;
                        console.log(tempresult.slice(firstchar, lengthy));
                        tempresult = tempresult.slice(0, firstchar) + tempresult.slice(lengthy);
                        return [3 /*break*/, 6];
                    case 5:
                        j++;
                        return [3 /*break*/, 3];
                    case 6:
                        i++;
                        return [3 /*break*/, 2];
                    case 7:
                        console.log(altarticles[0].type);
                        console.log(altarticles[1].type);
                        console.log(altarticles[2].type);
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent.prototype.getbyuri = function (uri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var stringy, tempid, tempbestek, tempbestek, tempdescription, tempformat, templanguage, temptitle, temptype, tempcreator, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.qserv.describequery(uri)];
                    case 1:
                        stringy = _a.sent();
                        tempid = this.qserv.filterfor(stringy, "dc:identifier");
                        console.log(tempid);
                        if (uri.includes("PLB")) {
                            tempbestek = "PLB";
                        }
                        else {
                            tempbestek = "MLB";
                        }
                        console.log(tempbestek);
                        tempdescription = this.qserv.filterfor(stringy, "dc:description");
                        console.log(tempdescription);
                        tempformat = this.qserv.filterfor(stringy, "dc:format");
                        console.log(tempformat);
                        templanguage = this.qserv.filterfor(stringy, "dc:language");
                        console.log(templanguage);
                        temptitle = this.qserv.filterfor(stringy, "dc:title");
                        console.log(temptitle);
                        temptype = this.qserv.filterfor(stringy, "dc:type");
                        console.log(temptype);
                        tempcreator = this.qserv.filterfor(stringy, "dc:creator");
                        console.log(tempcreator);
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        console.log(tempbsid);
                        this.temparticle = { id: tempid, bestek: tempbestek, description: tempdescription, format: tempformat, language: templanguage, title: temptitle, type: temptype, creator: tempcreator, bsid: tempbsid, source: "0" };
                        return [2 /*return*/, this.temparticle];
                }
            });
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.records = this.recordservice.getData();
        this.article = { id: "0010", bestek: "PLB", bsid: "00.10.", language: "English", description: "allUYGeyEBEBHBEHJEH JEJVHVHJEEHJV", format: "accepted", title: "testfilterPLB0010NIEUW", creator: "Sam Vanhee", type: "official_oldversion_2", source: "0" };
    };
    HomeComponent.prototype.filterinfoalternate = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, url, _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe <http://example/PLB/official/accepted/0010>");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        url = "http://128.199.58.129:7200/repositories/repo";
                        _a = this;
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        _a.word = _b.sent();
                        console.log(this.word.toString());
                        this.trial(this.word);
                        return [2 /*return*/, this.word];
                }
            });
        });
    };
    HomeComponent.prototype.trial = function (response) {
        var localito = response.split("http://example");
        console.log(localito[1]);
        for (var i = 1; i < localito.length; i++) {
            var tempid = this.filterfor(localito[i], "dc:identifier");
            var tempbestek = localito[i].slice(1, localito[i].substr(1, localito[i].length - 1).indexOf("/") + 1);
            var tempdescription = this.filterfor(localito[i], "dc:description");
            var tempformat = this.filterfor(localito[i], "dc:format");
            var templanguage = this.filterfor(localito[i], "dc:language");
            var temptitle = this.filterfor(localito[i], "dc:title");
            var temptype = this.filterfor(localito[i], "dc:type");
            var tempcreator = this.filterfor(localito[i], "dc:creator");
            var tempbsid1 = tempid.toString().slice(0, 2) + ".";
            if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                var tempbsid2 = tempid.toString().slice(2, 4) + ".";
                if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                    var tempbsid3 = tempid.toString().slice(4, 6) + ".";
                }
                else {
                    var tempbsid3 = "";
                }
            }
            else {
                var tempbsid2 = "";
                var tempbsid3 = "";
            }
            var tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
            this.temparticle = { id: tempid, bestek: tempbestek, description: tempdescription, format: tempformat, language: templanguage, title: temptitle, type: temptype, creator: tempcreator, bsid: tempbsid, source: "0" };
            console.log(this.temparticle.bestek);
            this.qserv.localupdaterequestlist.push(this.temparticle);
        }
    };
    HomeComponent.prototype.filterfor = function (stringy, property) {
        var firstchar = stringy.search(property.toString());
        firstchar = firstchar + property.toString().length + 2;
        var temp = stringy.slice(firstchar);
        var lastchar = temp.search("dc:") - 7;
        var endresult = temp.substring(0, lastchar);
        if (endresult == "") {
            var lastchars = temp.search("\" .");
            var endresult = temp.substring(0, lastchars);
            console.log(endresult);
        }
        return endresult;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_records_service__WEBPACK_IMPORTED_MODULE_2__["RecordsService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _queryservice_service__WEBPACK_IMPORTED_MODULE_4__["QueryserviceService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  homepage works!\n</p>\n"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"shortcut icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\r\n<style>\r\n  body{\r\n    position:center;\r\n    margin-top: 50px;\r\n  }\r\n  .centertext {\r\n    position: absolute;\r\n    font-size: 24px;\r\n    color: white;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    text-align: center;\r\n    top: 20%;\r\n    width: 100%;\r\n  }\r\n  .container {\r\n    position: relative;\r\n    background-color: salmon;\r\n    border-style: solid;\r\n    border-color: orangered;\r\n    border-width: 1px;\r\n    width: 30%;\r\n    height: 300px;\r\n    margin: auto;\r\n  }\r\n  .entertext {\r\n    position: absolute;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    left: 13%;\r\n    top:50%;\r\n    color: white;\r\n    font-size: 20px;\r\n    margin-bottom:10px;\r\n\r\n  }\r\n</style>\r\n\r\n<body>\r\n  <div class=\"container\">\r\n    <div class=\"centertext\">\r\n      LOGIN\r\n    </div>\r\n    <div class=\"entertext\">\r\n        <form (submit)=\"loginUser($event)\">\r\n            Username:<input type=\"text\" placeholder=\"Username\" id=\"username\">\r\n            <br/>\r\n            <br/>\r\n            Password:<input type=\"password\" placeholder=\"Password\" id=\"password\">\r\n            <br/>\r\n            <br/>\r\n            Submit:<input type=\"submit\" value=\"Submit\" placeholder=\"Submit\">\r\n        </form>\r\n    </div>\r\n  </div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _records_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../records.service */ "./src/app/records.service.ts");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(Auth, rec) {
        this.Auth = Auth;
        this.rec = rec;
        this.records = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.lifecycle = function () {
        //gets data from recordsservice and puts them as records variable
    };
    LoginComponent.prototype.loginUser = function (event) {
        var target = event.target;
        var username = target.querySelector('#username').value;
        var password = target.querySelector('#password').value;
        this.Auth.login(username, password);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _records_service__WEBPACK_IMPORTED_MODULE_3__["RecordsService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mainedit/mainedit.component.css":
/*!*************************************************!*\
  !*** ./src/app/mainedit/mainedit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5lZGl0L21haW5lZGl0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/mainedit/mainedit.component.html":
/*!**************************************************!*\
  !*** ./src/app/mainedit/mainedit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mainedit works!\n</p>\n"

/***/ }),

/***/ "./src/app/mainedit/mainedit.component.ts":
/*!************************************************!*\
  !*** ./src/app/mainedit/mainedit.component.ts ***!
  \************************************************/
/*! exports provided: MaineditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaineditComponent", function() { return MaineditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MaineditComponent = /** @class */ (function () {
    function MaineditComponent() {
    }
    MaineditComponent.prototype.ngOnInit = function () {
    };
    MaineditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainedit',
            template: __webpack_require__(/*! ./mainedit.component.html */ "./src/app/mainedit/mainedit.component.html"),
            styles: [__webpack_require__(/*! ./mainedit.component.css */ "./src/app/mainedit/mainedit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MaineditComponent);
    return MaineditComponent;
}());



/***/ }),

/***/ "./src/app/manager/manager.component.css":
/*!***********************************************!*\
  !*** ./src/app/manager/manager.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZXIvbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/manager/manager.component.html":
/*!************************************************!*\
  !*** ./src/app/manager/manager.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .container {\n    float:left;\n    background-color: salmon;\n    border-style: solid;\n    border-color: orangered;\n    border-width: 1px;\n    width: 45%;\n    margin-left: 40px;\n    margin-top:10px;\n    padding-bottom:20px;\n    max-height: 280px;\n  }\n  .textcontent {\n    text-align: left;\n    margin-left: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:18px;\n  }\n  .smalltext {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:12px;\n  }\n  .singlecommentcontainer {\n    height: fit-content;\n    border-style: solid;\n    border-color: black;\n    border-width: 1px;\n    width: 42%;\n    height:30px;\n    margin-right: 8px;\n    margin-bottom:7px;\n    float: left;\n  }\n  .singlecommentcontainer2 {\n    height: fit-content;\n    border-style: solid;\n    border-color: black;\n    border-width: 1px;\n    width: 90%;\n    height:30px;\n  }\n  .viewbutton {\n    width:15%;\n    float:left;\n    height: 30px;\n    cursor: pointer;\n  }\n  .commentdetails {\n    width: 85%;\n    float: left;\n    height: auto;\n  }\n  .commentitself {\n    width: 50%;\n    float:right;\n  }\n  .temporaryfix{\n    margin-top:-9px;\n    margin-right:-9px;\n  }\n  ul{\n    white-space:nowrap;\n  }\n</style>\n\n<div class=\"container\" style=\"height: fit-content;\">\n  <nav>\n    <p class=\"textcontent\">\n      <b>{{updatearticlesamount}} Update requests</b>\n    </p>\n  </nav>\n  <div style=\"overflow:auto;max-height: 200px;\">\n    <ul *ngFor=\"let article of this.updatearticleslist\">\n      <div class=\"singlecommentcontainer\">\n        <section class=\"viewbutton\">\n          <a [routerLink]=\"['/request',article.bestek,article.type,article.format,article.id.toString()]\">\n          <img src=\"../assets/images/view.png\" style=\"width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n          </a>\n        </section>\n        <section class=\"commentdetails\">\n          <div class=\"smalltext\" style=\"border-width:1px;border-color:black;border-style:solid;height:30px;\">\n            BSID: {{article.bsid}}\n            <br>\n            Title:{{article.title}}\n          </div>\n        </section>\n      </div>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container\">\n  <nav>\n    <p class=\"textcontent\">\n      <b>{{newarticlesamount}} New article requests</b>\n    </p>\n  </nav>\n  <div style=\"overflow:auto; max-height: 200px;\">\n    <ul *ngFor=\"let article of newarticleslist\" >\n      <div class=\"singlecommentcontainer\">\n        <section class=\"viewbutton\">\n          <a [routerLink]=\"['/request',article.bestek,article.type,article.format,article.id.toString()]\">\n          <img src=\"../assets/images/view.png\" style=\"width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n          </a>\n        </section>\n        <section class=\"commentdetails\">\n          <div class=\"smalltext\" style=\"border-width:1px;border-color:black;border-style:solid;height:30px;\">\n            BSID: {{article.bsid}}\n            <br>\n            Title:{{article.title}}\n          </div>\n        </section>\n        <section class=\"commentitself\">\n          <div class=\"temporaryfix\">\n          </div>\n        </section>\n      </div>\n    </ul>\n  </div>\n</div>\n\n<div class=\"container\" style=\"height:180px;\">\n  <nav>\n    <p class=\"textcontent\">\n      <b>Manage roles</b>\n      <img src=\"../assets/images/plus.png\"style=\"cursor:pointer;margin-top:-5px;margin-right:20px;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n      <b style=\"float:right;\">    Add new</b>\n    </p>\n  </nav>\n  <div>\n    <ul *ngFor=\"let role of newroleslist\">\n      <div class=\"singlecommentcontainer2\" style=\"margin-top:-14px;\">\n        <section style=\"float:left;width:24%;\">\n          <div class=\"smalltext\" style=\"margin-top:-10px;\">\n          <p>\n            <b>{{role.title}}:</b> \n          </p>\n          </div>\n        </section>\n        <section>\n          <div class=\"smalltext\">\n            {{role.currentusers.length}} current users: {{role.currentusers[0].username}}\n            <br>Permissions: {{role.permissions}}\n          </div>\n        </section>\n        <section style=\"float:right;margin-top:-28px;\">\n            <img src=\"../assets/images/edit.png\"style=\"cursor:pointer;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n        </section>\n      </div>\n\n    </ul>\n  </div>\n</div>\n\n<div class=\"container\" style=\"height:180px;overflow: auto;\">\n    <nav>\n      <p class=\"textcontent\">\n        <b>Manage users</b>\n        <img src=\"../assets/images/plus.png\"style=\"cursor:pointer;margin-top:-5px;margin-right:20px;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n        <b style=\"float:right;\">    Add new</b>\n      </p>\n    </nav>\n    <div>\n      <ul *ngFor=\"let user of newuserslist\">\n        <div class=\"singlecommentcontainer2\" style=\"margin-top:-14px;\">\n          <section style=\"float:left;\">\n            <img src={{user.picture}} style=\"cursor:pointer;margin-top:-5px;margin-right:20px;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n          </section>\n          <section style=\"float:left;\">\n            <div class=\"smalltext\">\n              <b>{{user.username}}:</b> {{user.role}}\n            </div>\n          </section>\n          <section style=\"float:right;margin-top:-2px;\">\n            <a [routerLink]=\"['/usereditor']\">\n              <img src=\"../assets/images/edit.png\"style=\"cursor:pointer;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n            </a>\n          </section>\n        </div>\n      </ul>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/manager/manager.component.ts":
/*!**********************************************!*\
  !*** ./src/app/manager/manager.component.ts ***!
  \**********************************************/
/*! exports provided: ManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerComponent", function() { return ManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _commentlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../commentlist */ "./src/app/commentlist.ts");
/* harmony import */ var _roleslist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../roleslist */ "./src/app/roleslist.ts");
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../userlist */ "./src/app/userlist.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../queryservice.service */ "./src/app/queryservice.service.ts");






var ManagerComponent = /** @class */ (function () {
    function ManagerComponent(qserv) {
        this.newcommentlist = _commentlist__WEBPACK_IMPORTED_MODULE_2__["commentlist"];
        this.temporaryfixcomment = _commentlist__WEBPACK_IMPORTED_MODULE_2__["commentlist"][2];
        this.newroleslist = _roleslist__WEBPACK_IMPORTED_MODULE_3__["roleslist"];
        this.newuserslist = _userlist__WEBPACK_IMPORTED_MODULE_4__["userlist"];
        this.newarticleslist = qserv.localnewrequestlist;
        this.updatearticleslist = qserv.localupdaterequestlist;
        console.log(this.updatearticleslist[1].description);
        this.newcommentamount = _commentlist__WEBPACK_IMPORTED_MODULE_2__["commentlist"].length.toString();
        //update later with a system that controls last login date with comment date to see if comments are actually new
        this.newarticlesamount = this.newarticleslist.length.toString();
        this.updatearticlesamount = this.updatearticleslist.length.toString();
    }
    ManagerComponent.prototype.ngOnInit = function () {
    };
    ManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manager',
            template: __webpack_require__(/*! ./manager.component.html */ "./src/app/manager/manager.component.html"),
            styles: [__webpack_require__(/*! ./manager.component.css */ "./src/app/manager/manager.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_5__["QueryserviceService"]])
    ], ManagerComponent);
    return ManagerComponent;
}());



/***/ }),

/***/ "./src/app/mlb/mlb.component.css":
/*!***************************************!*\
  !*** ./src/app/mlb/mlb.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21sYi9tbGIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/mlb/mlb.component.html":
/*!****************************************!*\
  !*** ./src/app/mlb/mlb.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-exportnavigator></app-exportnavigator>\r\n<br>\r\n<app-articleview [articlesarray]=\"newlist\"></app-articleview>"

/***/ }),

/***/ "./src/app/mlb/mlb.component.ts":
/*!**************************************!*\
  !*** ./src/app/mlb/mlb.component.ts ***!
  \**************************************/
/*! exports provided: MlbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MlbComponent", function() { return MlbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../articlelist */ "./src/app/articlelist.ts");



var MlbComponent = /** @class */ (function () {
    function MlbComponent() {
        this.newlist = _articlelist__WEBPACK_IMPORTED_MODULE_2__["articlelist"].sort(function (a, b) { return Number(a.id) - Number(b.id); });
    }
    MlbComponent.prototype.ngOnInit = function () {
    };
    MlbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mlb',
            template: __webpack_require__(/*! ./mlb.component.html */ "./src/app/mlb/mlb.component.html"),
            styles: [__webpack_require__(/*! ./mlb.component.css */ "./src/app/mlb/mlb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MlbComponent);
    return MlbComponent;
}());



/***/ }),

/***/ "./src/app/node.service.ts":
/*!*********************************!*\
  !*** ./src/app/node.service.ts ***!
  \*********************************/
/*! exports provided: NodeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeService", function() { return NodeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pregnantnode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pregnantnode */ "./src/app/pregnantnode.ts");
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlelist */ "./src/app/articlelist.ts");
/* harmony import */ var _queryservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryservice.service */ "./src/app/queryservice.service.ts");





var NodeService = /** @class */ (function () {
    function NodeService(qserv) {
        this.qserv = qserv;
        this.sortedarticlelist = this.getsortedarticlelist2();
        this.temporarylist = [];
        this.temporarylistPLB = [];
        this.nodes = [];
        this.nodes = this.createnodes2([], "");
        this.nodesPLB = [];
        this.nodesPLB = this.createnodesPLB([], "");
        this.checkednodes = [];
        for (var i = 0; i < this.nodes.length; i++) {
            if (this.nodes[i].checked) {
                this.checkednodes.push(this.nodes[i]);
            }
        }
    }
    NodeService.prototype.getnodes = function () {
        return this.nodes;
    };
    NodeService.prototype.getnodesPLB = function () {
        return this.nodesPLB;
    };
    NodeService.prototype.getcheckednodes = function () {
        return this.checkednodes;
    };
    NodeService.prototype.getsortedarticlelist = function () {
        this.sortedarticlelist = _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"].sort(function (a, b) { return Number(a.id) - Number(b.id); });
        return this.sortedarticlelist;
    };
    NodeService.prototype.getsortedarticlelist2 = function () {
        this.sortedarticlelist = this.qserv.locallist.sort(function (a, b) { return Number(a.id) - Number(b.id); });
        return this.sortedarticlelist;
    };
    NodeService.prototype.createnodes = function (tempnodes, prefix) {
        //fills the nodes inside the article class with their respective sub-articles
        for (var i = 0; i < _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"].length; i++) {
            //run through articlelist searching for elements (BSID) starting with prefix, and having an empty string behind the next "."
            if (_articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].bsid.startsWith(prefix) && _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].bsid.split(".").length - 1 == prefix.split(".").length) {
                this.temporarylist[i] = new _pregnantnode__WEBPACK_IMPORTED_MODULE_2__["Pregnantnode"](_articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].id, _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].title, [], [], _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].bestek, _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].type, _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].type);
                tempnodes.push(this.temporarylist[i]);
                this.createnodes(this.temporarylist[i].nodes, _articlelist__WEBPACK_IMPORTED_MODULE_3__["articlelist"][i].bsid);
            }
        }
        return tempnodes;
    };
    NodeService.prototype.createnodes2 = function (tempnodes, prefix) {
        //fills the nodes inside the article class with their respective sub-articles
        for (var i = 0; i < this.qserv.locallist.length; i++) {
            //run through articlelist searching for elements (BSID) starting with prefix, and having an empty string behind the next "."
            if (this.qserv.locallist[i].bsid.startsWith(prefix) && (this.qserv.locallist[i].bsid.split(".").length - 1) == prefix.split(".").length) {
                this.temporarylist[i] = new _pregnantnode__WEBPACK_IMPORTED_MODULE_2__["Pregnantnode"](this.qserv.locallist[i].id, this.qserv.locallist[i].title, [], [], this.qserv.locallist[i].bestek, this.qserv.locallist[i].type, this.qserv.locallist[i].format);
                tempnodes.push(this.temporarylist[i]);
                this.createnodes2(this.temporarylist[i].nodes, this.qserv.locallist[i].bsid);
            }
        }
        return tempnodes;
    };
    NodeService.prototype.createnodesPLB = function (tempnodes, prefix) {
        //fills the nodes inside the article class with their respective sub-articles
        for (var i = 0; i < this.qserv.localPLBlist.length; i++) {
            //run through articlelist searching for elements (BSID) starting with prefix, and having an empty string behind the next "."
            if (this.qserv.localPLBlist[i].bsid.startsWith(prefix) && (this.qserv.localPLBlist[i].bsid.split(".").length - 1) == prefix.split(".").length) {
                this.temporarylistPLB[i] = new _pregnantnode__WEBPACK_IMPORTED_MODULE_2__["Pregnantnode"](this.qserv.localPLBlist[i].id, this.qserv.localPLBlist[i].title, [], [], this.qserv.localPLBlist[i].bestek, this.qserv.localPLBlist[i].type, this.qserv.localPLBlist[i].format);
                tempnodes.push(this.temporarylistPLB[i]);
                this.createnodesPLB(this.temporarylistPLB[i].nodes, this.qserv.localPLBlist[i].bsid);
            }
        }
        return tempnodes;
    };
    NodeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_queryservice_service__WEBPACK_IMPORTED_MODULE_4__["QueryserviceService"]])
    ], NodeService);
    return NodeService;
}());

/*
//here you write your nodes or get them from the server
let Subartikel1_2_4_1 = new Pregnantnode('Subartikel 1.2.4.1',[],[]);
let Midartikel1_2_1 = new Pregnantnode('Midartikel 1.2.1',[],[]);
let Midartikel1_2_2 = new Pregnantnode('Midartikel 1.2.2',[],[]);
let Midartikel1_2_4 = new Pregnantnode('Midartikel 1.2.4',[Subartikel1_2_4_1],[]);
let Midartikel1_2_3 = new Pregnantnode('Midartikel 1.2.3',[],[]);
let Hoofdartikel1_2 = new Pregnantnode('Hoofdartikel 1.2',[Midartikel1_2_1,Midartikel1_2_2,Midartikel1_2_3, Midartikel1_2_4],[]);
let Hoofdartikel2_1 = new Pregnantnode('Hoofdartikel 2.1',[],[]);
let Hoofdartikel1_1 = new Pregnantnode('Hoofdartikel 1.1',[],[]);
let Hoofdartikel2_2 = new Pregnantnode('Hoofdartikel 2.2',[],[]);
let Hoofdstuk1 = new Pregnantnode('Hoofdstuk 1',[Hoofdartikel1_1,Hoofdartikel1_2],[]);
let Hoofdstuk2 = new Pregnantnode('Hoofdstuk 2',[Hoofdartikel2_1,Hoofdartikel2_2],[]);
this.nodes = [Hoofdstuk1,Hoofdstuk2];
*/ 


/***/ }),

/***/ "./src/app/plb/plb.component.css":
/*!***************************************!*\
  !*** ./src/app/plb/plb.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYi9wbGIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/plb/plb.component.html":
/*!****************************************!*\
  !*** ./src/app/plb/plb.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-exportnavigator></app-exportnavigator>\n<app-articleview [articlesarray]=\"newlist\"></app-articleview>\n"

/***/ }),

/***/ "./src/app/plb/plb.component.ts":
/*!**************************************!*\
  !*** ./src/app/plb/plb.component.ts ***!
  \**************************************/
/*! exports provided: PlbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlbComponent", function() { return PlbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node.service */ "./src/app/node.service.ts");



var PlbComponent = /** @class */ (function () {
    function PlbComponent(nodeservice) {
        this.checkednodes = nodeservice.getcheckednodes();
        this.newlist = [];
        for (var i = 0; i < this.checkednodes.length; i++) {
            this.newlist.push(this.checkednodes[i].getarticle());
            this.newlist.sort(function (a, b) { return Number(a.id) - Number(b.id); });
        }
    }
    PlbComponent.prototype.ngOnInit = function () {
    };
    PlbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-plb',
            template: __webpack_require__(/*! ./plb.component.html */ "./src/app/plb/plb.component.html"),
            styles: [__webpack_require__(/*! ./plb.component.css */ "./src/app/plb/plb.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"]])
    ], PlbComponent);
    return PlbComponent;
}());



/***/ }),

/***/ "./src/app/pregnantnode.ts":
/*!*********************************!*\
  !*** ./src/app/pregnantnode.ts ***!
  \*********************************/
/*! exports provided: Pregnantnode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pregnantnode", function() { return Pregnantnode; });
/* harmony import */ var _articlelist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articlelist */ "./src/app/articlelist.ts");

var Pregnantnode = /** @class */ (function () {
    function Pregnantnode(id, title, nodes, children, bestek, type, format) {
        this.id = id;
        this.bestek = bestek;
        this.type = type;
        this.format = format;
        this.title = title;
        this.children = children;
        this.nodes = nodes;
        this.expanded = false;
        this.checked = false;
    }
    Object.defineProperty(Pregnantnode.prototype, "haschildren", {
        get: function () {
            if (this.nodes.length < 1) {
                return false;
            }
            else {
                return true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Pregnantnode.prototype.toggle = function () {
        this.expanded = !this.expanded;
    };
    Pregnantnode.prototype.check = function () {
        var newState = !this.checked;
        this.checked = newState;
        this.checkRecursive(newState);
    };
    Pregnantnode.prototype.checkRecursive = function (state) {
        this.nodes.forEach(function (d) {
            d.checked = state;
            d.checkRecursive(state);
        });
    };
    Pregnantnode.prototype.getarticle = function () {
        for (var i = 0; i < _articlelist__WEBPACK_IMPORTED_MODULE_0__["articlelist"].length; i++) {
            if (this.id == _articlelist__WEBPACK_IMPORTED_MODULE_0__["articlelist"][i].id) {
                return _articlelist__WEBPACK_IMPORTED_MODULE_0__["articlelist"][i];
            }
        }
    };
    Pregnantnode.prototype.getarticle2 = function () {
        for (var i = 0; i < this.qserv.locallist.length; i++) {
            if (this.id == this.qserv.locallist[i].id) {
                return this.qserv.locallist[i];
            }
        }
    };
    return Pregnantnode;
}());



/***/ }),

/***/ "./src/app/queryservice.service.ts":
/*!*****************************************!*\
  !*** ./src/app/queryservice.service.ts ***!
  \*****************************************/
/*! exports provided: QueryserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryserviceService", function() { return QueryserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



//belangrijk, de input van lijsten worden bepaald door flat values, dus die moet ik nog veranderen voor de jury!!!!
var QueryserviceService = /** @class */ (function () {
    function QueryserviceService(http) {
        this.http = http;
        this.propertylist = ["identifier", "title", "type", "creator", "description", "language"]; //source toevoegen->identifier van source
        this.localupdaterequestlist = [];
        this.localnewrequestlist = [];
    }
    QueryserviceService.prototype.describequery = function (uri) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, url, word;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> prefix prov: <http://www.w3.org/ns/prov#> describe " + uri + " ");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        return [2 /*return*/, word.toString()];
                }
            });
        });
    };
    QueryserviceService.prototype.provgiver = function (bestek, type, format, identifier, bestekoud, typeoud, formatoud, identifieroud) {
        var qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
        var qbody = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestekoud + "%2F" + typeoud + "%2F" + formatoud + "%2F" + identifieroud + "%3E+prov%3Aalternateof+%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E%7D%0A";
        var body = qprefixes + qbody;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
    };
    QueryserviceService.prototype.createchangelog = function (bestek, type, format, identifier, changelog) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var qprefixes, qbody, body, headers, options, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
                qbody = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%2Fchangelog%3E+dc%3Adescription+%22" + changelog + "%22%7D%3B%0A";
                ;
                body = qprefixes + qbody;
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
                options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
                url = "http://128.199.58.129:7200/repositories/repo/statements";
                this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
                return [2 /*return*/];
            });
        });
    };
    QueryserviceService.prototype.deletechangelog = function (bestek, type, format, identifier) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var qprefixes, delidentifier, body, headers, options, url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
                delidentifier = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%2Fchangelog%3E+dc%3Adescription+%3Fo%3B+dc%3Adescription+%3Fo%7D%3B%0A";
                body = qprefixes + delidentifier;
                headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
                options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
                url = "http://128.199.58.129:7200/repositories/repo/statements";
                this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
                return [2 /*return*/];
            });
        });
    };
    QueryserviceService.prototype.returnchangelog = function (bestek, type, format, identifier) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, url, word, changelogtext;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe <http://example/" + bestek + "/" + type + "/" + format + "/" + identifier + "/changelog>");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        return [4 /*yield*/, this.filterfor(word, "dc:description")];
                    case 2:
                        changelogtext = _a.sent();
                        return [2 /*return*/, changelogtext];
                }
            });
        });
    };
    QueryserviceService.prototype.createnewlist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, url, word;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe \* where {?s dc:format \"newrequest\"} limit 100");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        this.trial(word, this.localnewrequestlist);
                        return [2 /*return*/, word];
                }
            });
        });
    };
    QueryserviceService.prototype.createupdatelist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, url, word;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe \* where {?s dc:format \"updaterequest\"} limit 100");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        this.trial(word, this.localupdaterequestlist);
                        return [2 /*return*/, word];
                }
            });
        });
    };
    QueryserviceService.prototype.trial = function (response, list) {
        var localito = response.split("http://example");
        console.log(localito[1]);
        for (var i = 1; i < localito.length; i++) {
            var tempid = this.filterfor(localito[i], "dc:identifier");
            var tempbestek = localito[i].slice(1, localito[i].substr(1, localito[i].length - 1).indexOf("/") + 1);
            var tempdescription = this.filterfor(localito[i], "dc:description");
            var tempformat = this.filterfor(localito[i], "dc:format");
            var templanguage = this.filterfor(localito[i], "dc:language");
            var temptitle = this.filterfor(localito[i], "dc:title");
            var temptype = this.filterfor(localito[i], "dc:type");
            var tempcreator = this.filterfor(localito[i], "dc:creator");
            var tempbsid1 = tempid.toString().slice(0, 2) + ".";
            if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                var tempbsid2 = tempid.toString().slice(2, 4) + ".";
                if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                    var tempbsid3 = tempid.toString().slice(4, 6) + ".";
                }
                else {
                    var tempbsid3 = "";
                }
            }
            else {
                var tempbsid2 = "";
                var tempbsid3 = "";
            }
            var tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
            this.temparticle2 = { id: tempid, bestek: tempbestek, description: tempdescription, format: tempformat, language: templanguage, title: temptitle, type: temptype, creator: tempcreator, bsid: tempbsid, source: "0" };
            console.log(this.temparticle2.bestek);
            list.push(this.temparticle2);
        }
    };
    QueryserviceService.prototype.filterfor2 = function (stringy, property) {
        var firstchar = stringy.search(property.toString());
        firstchar = firstchar + property.toString().length + 2;
        var temp = stringy.slice(firstchar);
        var lastchar = temp.search("dc:") - 7;
        var endresult = temp.substring(0, lastchar);
        if (endresult == "") {
            var lastchars = temp.search("\" .");
            var endresult = temp.substring(0, lastchars);
            console.log(endresult);
        }
        return endresult;
    };
    QueryserviceService.prototype.filterfor = function (stringy, property) {
        if (stringy.includes("http://www.w3.org/ns/prov#alternateof")) {
            for (var i = 0; i < 10; i++) {
                stringy = this.provkiller(stringy);
            }
            console.log("HEY");
            console.log(stringy);
        }
        var firstchar = stringy.search(property.toString());
        firstchar = firstchar + property.toString().length + 2;
        var temp = stringy.slice(firstchar);
        var lastchar = temp.search("dc:") - 7;
        var endresult = temp.substring(0, lastchar);
        if (endresult == "") {
            var lastchars = temp.search("\" .");
            var endresult = temp.substring(0, lastchars);
            console.log(endresult);
        }
        if (endresult.includes("http://example")) {
            if (endresult.includes("\" .")) {
                var lastchars = temp.search("\" .");
                var endresult = temp.substring(0, lastchars);
            }
            else {
                var lastchars = temp.search("prov:alternateof");
                var endresult = temp.substring(0, lastchars - 3);
            }
        }
        return endresult;
    };
    QueryserviceService.prototype.provkiller = function (stringy) {
        if (stringy.includes("http://www.w3.org/ns/prov#alternateof")) {
            for (var i = 12; i < 120; i++) {
                if (stringy.slice(stringy.search("http://www.w3.org/ns/prov#alternateof") - i, stringy.search("http://www.w3.org/ns/prov#alternateof")).includes("<http://example")) {
                    var firstchar = stringy.search("http://www.w3.org/ns/prov#alternateof") - i;
                    for (var i_1 = 12; i_1 < 400; i_1++) {
                        if (stringy.slice(stringy.search("http://www.w3.org/ns/prov#alternateof"), stringy.search("http://www.w3.org/ns/prov#alternateof") + i_1).includes("/accepted/")) {
                            var lastchar = stringy.search("http://www.w3.org/ns/prov#alternateof") + i_1 + 7;
                            break;
                        }
                    }
                    stringy = stringy.replace(stringy.slice(firstchar, lastchar), "");
                    break;
                }
            }
            return stringy;
        }
        else {
            if (stringy.includes("prov:alternateof")) {
                for (var i = 12; i < 120; i++) {
                    if (stringy.slice(stringy.search("prov:alternateof") - i, stringy.search("prov:alternateof")).includes("<http://example")) {
                        var firstchar = stringy.search("prov:alternateof") - i;
                        for (var i_2 = 12; i_2 < 400; i_2++) {
                            if (stringy.slice(stringy.search("prov:alternateof"), stringy.search("prov:alternateof") + i_2).includes("/accepted/")) {
                                var lastchar = stringy.search("prov:alternateof") + i_2 + 7;
                                break;
                            }
                        }
                        stringy = stringy.replace(stringy.slice(firstchar, lastchar), "");
                        break;
                    }
                }
                return stringy;
            }
            else {
                return stringy;
            }
        }
    };
    QueryserviceService.prototype.getlist = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //method bij opstarten om lokale MLB lijst aan te maken
                    return [4 /*yield*/, this.localarticlelist("MLB", "official", "accepted")];
                    case 1:
                        //method bij opstarten om lokale MLB lijst aan te maken
                        _a.sent(); //aanvullen met lokale lijsten voor PLB en andere versies
                        return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.flushlist = function () {
        //ledigt lokale lijst
        this.locallist = [];
    };
    QueryserviceService.prototype.localarticlelist = function (bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, tempid, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid, temptitle, templanguage, tempdescription, tempbestek, temptype, tempcreator, tempsource, tempformat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.locallist = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 120)) return [3 /*break*/, 10];
                        tempid = "0".repeat(4 - i.toString().length) + i.toString();
                        console.log(tempid);
                        return [4 /*yield*/, this.existcheck(bestek, type, tempid, format)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        console.log("yes");
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:title", format)];
                    case 3:
                        temptitle = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:language", format)];
                    case 4:
                        templanguage = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:description", format)];
                    case 5:
                        tempdescription = _a.sent();
                        tempbestek = bestek;
                        temptype = type;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:creator", format)];
                    case 6:
                        tempcreator = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:format", format)];
                    case 7:
                        tempformat = _a.sent();
                        console.log(tempid);
                        this.temparticle = { id: tempid, bsid: tempbsid, title: temptitle, language: templanguage, description: tempdescription, bestek: tempbestek, type: temptype, creator: tempcreator, source: tempsource, format: tempformat };
                        //lokale parameters invullen in een nieuwe lokale 'Article'-klasse
                        this.locallist.push(this.temparticle);
                        _a.label = 8;
                    case 8:
                        if (i == 120) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.localarticlePLBlist = function (bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, tempid, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid, temptitle, templanguage, tempdescription, tempbestek, temptype, tempcreator, tempsource, tempformat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.localPLBlist = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 20)) return [3 /*break*/, 10];
                        tempid = "0".repeat(4 - i.toString().length) + i.toString();
                        console.log(tempid);
                        return [4 /*yield*/, this.existcheck(bestek, type, tempid, format)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        console.log("yes");
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:title", format)];
                    case 3:
                        temptitle = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:language", format)];
                    case 4:
                        templanguage = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:description", format)];
                    case 5:
                        tempdescription = _a.sent();
                        tempbestek = bestek;
                        temptype = type;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:creator", format)];
                    case 6:
                        tempcreator = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:format", format)];
                    case 7:
                        tempformat = _a.sent();
                        console.log(tempformat);
                        this.temparticle = { id: tempid, bsid: tempbsid, title: temptitle, language: templanguage, description: tempdescription, bestek: tempbestek, type: temptype, creator: tempcreator, source: tempsource, format: tempformat };
                        //lokale parameters invullen in een nieuwe lokale 'Article'-klasse
                        this.localPLBlist.push(this.temparticle);
                        _a.label = 8;
                    case 8:
                        if (i == 20) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.localarticlealternatelist = function (bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, tempid, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid, temptitle, templanguage, tempdescription, tempbestek, temptype, tempcreator, tempsource, tempformat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.localalternatelist = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 20)) return [3 /*break*/, 10];
                        tempid = "0".repeat(4 - i.toString().length) + i.toString();
                        console.log(tempid);
                        return [4 /*yield*/, this.existcheck(bestek, type, tempid, format)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        console.log("yes");
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:title", format)];
                    case 3:
                        temptitle = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:language", format)];
                    case 4:
                        templanguage = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:description", format)];
                    case 5:
                        tempdescription = _a.sent();
                        tempbestek = bestek;
                        temptype = type;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:creator", format)];
                    case 6:
                        tempcreator = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:format", format)];
                    case 7:
                        tempformat = _a.sent();
                        console.log(tempid);
                        this.temparticle = { id: tempid, bsid: tempbsid, title: temptitle, language: templanguage, description: tempdescription, bestek: tempbestek, type: temptype, creator: tempcreator, source: tempsource, format: tempformat };
                        //lokale parameters invullen in een nieuwe lokale 'Article'-klasse
                        this.localalternatelist.push(this.temparticle);
                        _a.label = 8;
                    case 8:
                        if (i == 20) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.localarticlenewrequestlist = function (bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, tempid, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid, temptitle, templanguage, tempdescription, tempbestek, temptype, tempcreator, tempsource, tempformat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.localnewrequestlist = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 120)) return [3 /*break*/, 10];
                        tempid = "0".repeat(4 - i.toString().length) + i.toString();
                        console.log(tempid);
                        return [4 /*yield*/, this.existcheck(bestek, type, tempid, format)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        console.log("yes");
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:title", format)];
                    case 3:
                        temptitle = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:language", format)];
                    case 4:
                        templanguage = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:description", format)];
                    case 5:
                        tempdescription = _a.sent();
                        tempbestek = bestek;
                        temptype = type;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:creator", format)];
                    case 6:
                        tempcreator = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:format", format)];
                    case 7:
                        tempformat = _a.sent();
                        console.log(tempid);
                        this.temparticle = { id: tempid, bsid: tempbsid, title: temptitle, language: templanguage, description: tempdescription, bestek: tempbestek, type: temptype, creator: tempcreator, source: tempsource, format: tempformat };
                        //lokale parameters invullen in een nieuwe lokale 'Article'-klasse
                        this.localnewrequestlist.push(this.temparticle);
                        _a.label = 8;
                    case 8:
                        if (i == 120) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.localarticleupdaterequestlist = function (bestek, type, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, tempid, tempbsid1, tempbsid2, tempbsid3, tempbsid3, tempbsid2, tempbsid3, tempbsid, temptitle, templanguage, tempdescription, tempbestek, temptype, tempcreator, tempsource, tempformat;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.localupdaterequestlist = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < 120)) return [3 /*break*/, 10];
                        tempid = "0".repeat(4 - i.toString().length) + i.toString();
                        console.log(tempid);
                        return [4 /*yield*/, this.existcheck(bestek, type, tempid, format)];
                    case 2:
                        if (!_a.sent()) return [3 /*break*/, 8];
                        console.log("yes");
                        tempbsid1 = tempid.toString().slice(0, 2) + ".";
                        if (tempid.toString().slice(2, 4) != "00" && tempid.toString().slice(2, 4) != "") {
                            tempbsid2 = tempid.toString().slice(2, 4) + ".";
                            if (tempid.toString().slice(4, 6) != "00" && tempid.toString().slice(4, 6) != "") {
                                tempbsid3 = tempid.toString().slice(4, 6) + ".";
                            }
                            else {
                                tempbsid3 = "";
                            }
                        }
                        else {
                            tempbsid2 = "";
                            tempbsid3 = "";
                        }
                        tempbsid = tempbsid1 + tempbsid2 + tempbsid3;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:title", format)];
                    case 3:
                        temptitle = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:language", format)];
                    case 4:
                        templanguage = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:description", format)];
                    case 5:
                        tempdescription = _a.sent();
                        tempbestek = bestek;
                        temptype = type;
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:creator", format)];
                    case 6:
                        tempcreator = _a.sent();
                        return [4 /*yield*/, this.filterproperty(bestek, type, tempid, "dc:format", format)];
                    case 7:
                        tempformat = _a.sent();
                        this.temparticle = { id: tempid, bsid: tempbsid, title: temptitle, language: templanguage, description: tempdescription, bestek: tempbestek, type: temptype, creator: tempcreator, source: tempsource, format: tempformat };
                        //lokale parameters invullen in een nieuwe lokale 'Article'-klasse
                        this.localupdaterequestlist.push(this.temparticle);
                        _a.label = 8;
                    case 8:
                        if (i == 120) {
                            return [2 /*return*/, true];
                        }
                        _a.label = 9;
                    case 9:
                        i++;
                        return [3 /*break*/, 1];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.existcheck = function (bestek, type, identifier, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, options, url, word;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> prefix prov: <http://www.w3.org/ns/prov#> describe <http://example/" + bestek + "/" + type + "/" + format + "/" + identifier + ">");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        options = { headers: headers, responseType: 'text' };
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        if (word.length > 424) { //was 380 zonder prefix prov
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QueryserviceService.prototype.filterproperty = function (bestek, type, identifier, property, format) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var body, headers, options, url, word;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        body = new URLSearchParams();
                        body.set("query", "PREFIX dc: <http://purl.org/dc/elements/1.1/> describe <http://example/" + bestek + "/" + type + "/" + format + "/" + identifier + "> where {?s dc:identifier \"" + identifier + "\"} limit 20");
                        headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set("Content-Type", 'application/x-www-form-urlencoded');
                        options = { headers: headers, responseType: 'text' };
                        url = "http://128.199.58.129:7200/repositories/repo";
                        return [4 /*yield*/, this.http.post(url, body.toString(), { headers: headers, responseType: 'text' }).toPromise().then(function (response) {
                                return response.toString();
                            })];
                    case 1:
                        word = _a.sent();
                        return [2 /*return*/, this.filterfor(word, property.toString())];
                }
            });
        });
    };
    QueryserviceService.prototype.updatequery = function (bestek, identifier, type, title, creator, description, language, format) {
        //inserts new RDF node with appropriate properties (meant for official nodes, use alternateof for other versions)
        //QSOURCEARTICLE needs work!!!!
        //prefix prov: <http://www.w3.org/ns/prov#>
        var qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
        var qidentifier = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aidentifier+%22" + identifier + "%22%7D%3B%0A";
        var qtitle = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atitle+%22" + title + "%22%7D%3B%0A";
        var qtype = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atype+%22" + type + "%22%7D%3B%0A";
        var qcreator = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Acreator+%22" + creator + "%22%7D%3B%0A";
        var qdescription = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adescription+%22" + description + "%22%7D%3B%0A";
        var qlanguage = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Alanguage+%22" + language + "%22%7D%3B%0A";
        var qformat = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aformat+%22" + format + "%22%7D%3B%0A";
        var qdummy = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adate+%22dummyproperty%22%7D%3B%0A";
        //const qsourcearticle="insert+data+%7B%3Chttp%3A%2F%2Fexample%2F"+bestek+"%2F"+identifier+"%2F"+type+"%3E+dc%3Asource+%22"+"%22%7D%3B%0A";//edit
        var body = qprefixes + qidentifier + qtitle + qtype + qcreator + qdescription + qlanguage + qformat + qdummy;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
        //const qalternateof="insert+data+%7B%3Chttp%3A%2F%2Fexample%2F"+bestek+"%2F"+identifier+"%2F"+type+"%3E+prov%3AalternateOf+%22"+alternateof+"%22%7D%3B%0A";
    };
    QueryserviceService.prototype.flush = function (bestek, identifier, type, format) {
        //flushes everything from properties (SOURCE ARTICLE ISNT FLUSHED!!!)
        var qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
        var delidentifier = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aidentifier+%3Fo%3B+dc%3Aidentifier+%3Fo%7D%3B%0A";
        var deltitle = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atitle+%3Fo%3B+dc%3Atitle+%3Fo%7D%3B%0A";
        var deltype = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atype+%3Fo%3B+dc%3Atype+%3Fo%7D%3B%0A";
        var delcreator = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Acreator+%3Fo%3B+dc%3Acreator+%3Fo%7D%3B%0A";
        var deldescription = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adescription+%3Fo%3B+dc%3Adescription+%3Fo%7D%3B%0A";
        var dellanguage = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Alanguage+%3Fo%3B+dc%3Alanguage+%3Fo%7D%3B%0A";
        var delformat = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aformat+%3Fo%3B+dc%3Aformat+%3Fo%7D%3B%0A";
        var deldummy = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adate+%3Fo%3B+dc%3Adate+%3Fo%7D%3B%0A";
        //const delsourcearticle="delete+where+%7B%3Chttp%3A%2F%2Fexample%2F"+bestek+"%2F"+identifier+"%2F"+type+"%3E+dc%3Aidentifier+%3Fo%3B+dc%3Aidentifier+%3Fo%7D%0A";
        var body = qprefixes + delidentifier + deltitle + deltype + delcreator + deldescription + dellanguage + delformat + deldummy;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
    };
    QueryserviceService.prototype.royalflush = function (bestek, identifier, type, format) {
        //flushes everything from properties AND RELATIONSHIP TO SOURCE ARTICLE!!!
        var qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
        var delidentifier = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aidentifier+%3Fo%3B+dc%3Aidentifier+%3Fo%7D%3B%0A";
        var deltitle = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atitle+%3Fo%3B+dc%3Atitle+%3Fo%7D%3B%0A";
        var deltype = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Atype+%3Fo%3B+dc%3Atype+%3Fo%7D%3B%0A";
        var delcreator = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Acreator+%3Fo%3B+dc%3Acreator+%3Fo%7D%3B%0A";
        var deldescription = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adescription+%3Fo%3B+dc%3Adescription+%3Fo%7D%3B%0A";
        var dellanguage = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Alanguage+%3Fo%3B+dc%3Alanguage+%3Fo%7D%3B%0A";
        var delsourcearticle = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Asource+%3Fo%3B+dc%3Asource+%3Fo%7D%0A";
        var delformat = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Aformat+%3Fo%3B+dc%3Aformat+%3Fo%7D%3B%0A";
        var deldummy = "delete+where+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + format + "%2F" + identifier + "%3E+dc%3Adate+%3Fo%3B+dc%3Adate+%3Fo%7D%3B%0A";
        var body = qprefixes + delidentifier + deltitle + deltype + delcreator + deldescription + dellanguage + delsourcearticle + delformat + deldummy;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
    };
    QueryserviceService.prototype.alternateversionquery = function (bestek, identifier, type, title, creator, description, language, alternateof) {
        //needs to be completed after article infrastructure is present
        //prefix prov: <http://www.w3.org/ns/prov#>
        var qprefixes = "update=PREFIX+dc%3A+%3Chttp%3A%2F%2Fpurl.org%2Fdc%2Felements%2F1.1%2F%3E%0Aprefix+prov%3A+%3Chttp%3A%2F%2Fwww.w3.org%2Fns%2Fprov%23%3E%0A";
        var qidentifier = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Aidentifier+%22" + identifier + "%22%7D%3B%0A";
        var qtitle = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Atitle+%22" + title + "%22%7D%3B%0A";
        var qtype = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Atype+%22" + type + "%22%7D%3B%0A";
        var qcreator = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Acreator+%22" + creator + "%22%7D%3B%0A";
        var qdescription = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Adescription+%22" + description + "%22%7D%3B%0A";
        var qlanguage = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Alanguage+%22" + language + "%22%7D%3B%0A";
        var qalternateof = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+prov%3AalternateOf+%22" + alternateof + "%22%7D%3B%0A";
        var qdummy = "insert+data+%7B%3Chttp%3A%2F%2Fexample%2F" + bestek + "%2F" + type + "%2F" + identifier + "%3E+dc%3Adate+%22dummyproperty%22%7D%3B%0A";
        //qdummy needs to be last!
        var body = qprefixes + qidentifier + qtitle + qtype;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Accept', 'application/x-trig').set('Content-Type', 'application/x-www-form-urlencoded');
        var options = { headers: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"] };
        var url = "http://128.199.58.129:7200/repositories/repo/statements";
        this.http.post(url, body, { headers: headers }).toPromise().then(function (response) { });
    };
    QueryserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QueryserviceService);
    return QueryserviceService;
}());



/***/ }),

/***/ "./src/app/records.service.ts":
/*!************************************!*\
  !*** ./src/app/records.service.ts ***!
  \************************************/
/*! exports provided: RecordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordsService", function() { return RecordsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var RecordsService = /** @class */ (function () {
    function RecordsService(http) {
        this.http = http;
        this.query = "curl -G -H \"Accept:application/x-trig\" -d query=INSERT+DATA+%7B%3Chttp%3A%2F%2Fexample%2F2aan%3E+dc%3Atitle+%22pullnaam%22%7D+10 http://localhost:7200/repositories/DBtestclean";
        this.ROOT_URL = "http://localhost:7200/repositories/DBtestclean";
    }
    RecordsService.prototype.getData = function () {
        this.posts = this.http.get("http://localhost:7200/sparql?name=&infer=true&sameAs=true&query=INSERT+DATA+%7B+%3Chttp%3A%2F%2Fexample%2Fbook1%3E+dc%3Atitle+%22A+new+book%22%7D%0A").subscribe;
    };
    RecordsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecordsService);
    return RecordsService;
}());



/***/ }),

/***/ "./src/app/recursivebrowser/recursivebrowser.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/recursivebrowser/recursivebrowser.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlY3Vyc2l2ZWJyb3dzZXIvcmVjdXJzaXZlYnJvd3Nlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/recursivebrowser/recursivebrowser.component.html":
/*!******************************************************************!*\
  !*** ./src/app/recursivebrowser/recursivebrowser.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<tree-view [nodes]=\"nodes\"></tree-view>"

/***/ }),

/***/ "./src/app/recursivebrowser/recursivebrowser.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/recursivebrowser/recursivebrowser.component.ts ***!
  \****************************************************************/
/*! exports provided: RecursivebrowserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecursivebrowserComponent", function() { return RecursivebrowserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node.service */ "./src/app/node.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var RecursivebrowserComponent = /** @class */ (function () {
    function RecursivebrowserComponent(router, nodeservice, _route) {
        this.url = router.url.toString();
        //here you call your nodes (root articles)
        if (this.url == "/projectlastenboek") {
            this.nodes = nodeservice.getnodesPLB();
        }
        else {
            this.nodes = nodeservice.getnodes();
        }
    }
    RecursivebrowserComponent.prototype.ngOnInit = function () {
    };
    RecursivebrowserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recursivebrowser',
            template: __webpack_require__(/*! ./recursivebrowser.component.html */ "./src/app/recursivebrowser/recursivebrowser.component.html"),
            styles: [__webpack_require__(/*! ./recursivebrowser.component.css */ "./src/app/recursivebrowser/recursivebrowser.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _node_service__WEBPACK_IMPORTED_MODULE_2__["NodeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], RecursivebrowserComponent);
    return RecursivebrowserComponent;
}());



/***/ }),

/***/ "./src/app/roleslist.ts":
/*!******************************!*\
  !*** ./src/app/roleslist.ts ***!
  \******************************/
/*! exports provided: roleslist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleslist", function() { return roleslist; });
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlist */ "./src/app/userlist.ts");

var roleslist = [
    { title: "projectmanager", permissions: "project changes, read, edit", currentusers: [_userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][0]] },
    { title: "specificationsmanager", permissions: "project changes,user changes, read, edit, apply, delete", currentusers: [_userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][1]] },
    { title: "architect", permissions: "read, edit", currentusers: [_userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][2]] },
    { title: "visitor", permissions: "read", currentusers: [_userlist__WEBPACK_IMPORTED_MODULE_0__["userlist"][3]] }
];


/***/ }),

/***/ "./src/app/singlecomment/singlecomment.component.css":
/*!***********************************************************!*\
  !*** ./src/app/singlecomment/singlecomment.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpbmdsZWNvbW1lbnQvc2luZ2xlY29tbWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/singlecomment/singlecomment.component.html":
/*!************************************************************!*\
  !*** ./src/app/singlecomment/singlecomment.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .testclass{\n    float: right;\n    background-color: lightgray;\n    padding: 3px;\n    border-color: black;\n    border-width: 1px;\n    border-style:solid;\n    width:246px;\n    height:fit-content;\n    min-height: 30px;\n  }\n  .text{\n    text-align: left;\n    font-size: 8px;\n    font-family: Arial, Helvetica, sans-serif;\n    position:relative;\n  }\n</style>\n\n<body>\n  <div class=\"testclass\">\n    <section style=\"width:17%;float:left;\">\n      <img src={{comment.user.picture}} style=\"width:30px;height:30px;border:0;\">\n    </section>\n    <section style=\"width:60%;\">\n      <div class=\"text\">\n        {{comment.time}}<br>\n        <b>{{comment.user.username}}:</b>\n        {{comment.content}}\n      </div>\n    </section>\n    \n  </div>\n</body>"

/***/ }),

/***/ "./src/app/singlecomment/singlecomment.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/singlecomment/singlecomment.component.ts ***!
  \**********************************************************/
/*! exports provided: SinglecommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglecommentComponent", function() { return SinglecommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../comment */ "./src/app/comment.ts");



var SinglecommentComponent = /** @class */ (function () {
    function SinglecommentComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _comment__WEBPACK_IMPORTED_MODULE_2__["Comment"])
    ], SinglecommentComponent.prototype, "comment", void 0);
    SinglecommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-singlecomment',
            template: __webpack_require__(/*! ./singlecomment.component.html */ "./src/app/singlecomment/singlecomment.component.html"),
            styles: [__webpack_require__(/*! ./singlecomment.component.css */ "./src/app/singlecomment/singlecomment.component.css")]
        })
    ], SinglecommentComponent);
    return SinglecommentComponent;
}());



/***/ }),

/***/ "./src/app/treeview/treeview.component.css":
/*!*************************************************!*\
  !*** ./src/app/treeview/treeview.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWV2aWV3L3RyZWV2aWV3LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/treeview/treeview.component.html":
/*!**************************************************!*\
  !*** ./src/app/treeview/treeview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n    <style>\n        \n        .caret {\n        -webkit-user-select: none; /* Safari 3.1+ */\n        -moz-user-select: none; /* Firefox 2+ */\n        -ms-user-select: none; /* IE 10+ */\n        user-select: none;\n      }\n      .caret::after {\n        content: \"\\25B6\";\n        color: black;\n        display: inline-block;\n        margin-right: 3px;\n      }\n      .caretdown{\n        -webkit-user-select: none; /* Safari 3.1+ */\n        -moz-user-select: none; /* Firefox 2+ */\n        -ms-user-select: none; /* IE 10+ */\n        user-select: none;\n      }\n      .caretdown::after{\n        content: \"\\25B6\";\n        color: black;\n        display: inline-block;\n        margin-right: 3px;\n        transform: rotate(90deg);\n      }\n      .myul{\n        list-style-type: none;\n      }\n      .nested{\n        display:none;\n        list-style-type: none;\n      }\n      .active{\n        display: block;\n        list-style-type: none;\n      }\n      .link{\n        font-size:12px;\n        color:black;\n      }\n    </style>\n</head>\n\n<ul class=\"myul\">\n    <li *ngFor=\"let pregnantnode of nodes\">\n        <span><input type=\"checkbox\" [checked]=\"pregnantnode.checked\" (click)=\"pregnantnode.check()\"/></span> \n        <a [routerLink]=\"['view',pregnantnode.bestek,pregnantnode.type,'accepted',pregnantnode.id]\" class=\"link\">{{ pregnantnode.title }}</a>\n        <span *ngIf=\"(!pregnantnode.expanded && pregnantnode.haschildren)\" class=\"caret\" (click)=\"pregnantnode.toggle()\"></span>\n        <span *ngIf=\"(pregnantnode.expanded && pregnantnode.haschildren)\" class=\"caretdown\" (click)=\"pregnantnode.toggle()\"></span>\n        <div *ngIf=\"pregnantnode.expanded\">\n            <ul class=\"myul\">\n                <li *ngFor=\"let child of pregnantnode.children\">\n                    <span><input type=\"checkbox\" [checked]=\"child.checked\" (click)=\"child.check()\"/></span> \n                    {{child}}\n                </li>\n            </ul>\n            <tree-view [nodes]=\"pregnantnode.nodes\"></tree-view>\n        </div>\n    </li>\n</ul>"

/***/ }),

/***/ "./src/app/treeview/treeview.component.ts":
/*!************************************************!*\
  !*** ./src/app/treeview/treeview.component.ts ***!
  \************************************************/
/*! exports provided: TreeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeviewComponent", function() { return TreeviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var TreeviewComponent = /** @class */ (function () {
    function TreeviewComponent(_route) {
        this._route = _route;
    }
    TreeviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['nodes'];
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], TreeviewComponent.prototype, "nodes", void 0);
    TreeviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tree-view',
            template: __webpack_require__(/*! ./treeview.component.html */ "./src/app/treeview/treeview.component.html"),
            styles: [__webpack_require__(/*! ./treeview.component.css */ "./src/app/treeview/treeview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], TreeviewComponent);
    return TreeviewComponent;
}());



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/usereditor/usereditor.component.css":
/*!*****************************************************!*\
  !*** ./src/app/usereditor/usereditor.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJlZGl0b3IvdXNlcmVkaXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/usereditor/usereditor.component.html":
/*!******************************************************!*\
  !*** ./src/app/usereditor/usereditor.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .sectionpicture{\n    width: 20.5%;\n    float:left;\n    border-style: solid;\n    border-width: 2px;\n    border-color: black;\n    background-color: salmon;\n    padding: 10px;\n  }\n  .picture {\n  float: left;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  }\n  .textcontour{\n    text-align:left;\n    border-width:1px;\n    border-color:black;\n    border-style:solid;\n    font-family: Arial, Helvetica, sans-serif;\n    padding:3px;\n  }\n  .container {\n    float:left;\n    background-color: salmon;\n    border-style: solid;\n    border-color: orangered;\n    border-width: 1px;\n    width: 90%;\n    margin-left: 40px;\n    margin-top:10px;\n    padding-bottom:20px;\n    max-height: 280px;\n  }\n  .textcontent {\n    text-align: left;\n    margin-left: 20px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:18px;\n  }\n  .smalltext {\n    font-family: Arial, Helvetica, sans-serif;\n    font-size:12px;\n  }\n  .singlecommentcontainer {\n    height: fit-content;\n    width: 90%;\n    border-style:solid;\n    border-color: black;\n    border-width:1px;\n    height:30px;\n  }\n  .viewbutton {\n    width:6%;\n    float:left;\n    height: 30px;\n    cursor: pointer;\n  }\n  .commentdetails {\n    width: 44%;\n    float: left;\n    height: auto;\n  }\n</style>\n\n<body>\n  <section style=\"float:left;width:40%;\">\n      <div class=\"container\" style=\"height:180px;\">\n          <nav>\n            <p class=\"textcontent\">\n              <b>Manage users</b>\n              <img src=\"../assets/images/plus.png\"style=\"cursor:pointer;margin-top:-5px;margin-right:20px;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n              <b style=\"float:right;\">    Add new</b>\n            </p>\n          </nav>\n          <div>\n            <ul *ngFor=\"let user of newuserslist\">\n              <div class=\"singlecommentcontainer\" style=\"margin-top:-14px;\">\n                <section style=\"float:left;\">\n                  <img src={{user.picture}} style=\"cursor:pointer;margin-top:-5px;margin-right:20px;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\">\n                </section>\n                <section style=\"float:left;\">\n                  <div class=\"smalltext\">\n                    <b>{{user.username}}:</b> {{user.role}}\n                  </div>\n                </section>\n                <section style=\"float:right;margin-top:-2px;\">\n                    <img src=\"../assets/images/edit.png\"style=\"cursor:pointer;float:right;width:30px;height:30px;border-width:1px;border-color:black;border-style:solid;\" (click)=\"changeuser(user)\">\n                </section>\n              </div>\n            </ul>\n          </div>\n        </div>\n  </section>\n  <section class=\"sectionpicture\">\n    <div class=\"picture\">\n      <img src=\"{{currentuser.picture}}\" alt=\"User picture\" style=\"width:300px;height:300px;border:0;\"/>\n    </div>\n    <div class=\"textcontour\">\n      User ID: <input type=\"text\" style=\"float:right;width:60%;\" [(ngModel)]=\"currentuser.id\">\n    </div>\n    <div class=\"textcontour\">\n      Username: <input type=\"text\" style=\"float:right;width:60%;\"[(ngModel)]=\"currentuser.username\">\n    </div>\n    <div class=\"textcontour\">\n      Role: <input type=\"text\" style=\"float:right;width:60%;\" [(ngModel)]=\"currentuser.role\">\n    </div>\n    <div class=\"textcontour\">\n      E-mail: <input type=\"text\" style=\"float:right;width:60%;\">\n    </div>\n    <div class=\"textcontour\">\n      Language: <input type=\"text\" style=\"float:right;width:60%;\">\n    </div>\n    <div class=\"textcontour\">\n      Password: <input type=\"text\" style=\"float:right;width:60%;\">\n    </div>\n    <div Style=\"border-width:1px;border-color:black;border-style:solid;padding:4px;text-align:center;cursor:pointer;\">\n      <b>Save</b>\n    </div>\n\n  </section>\n</body>"

/***/ }),

/***/ "./src/app/usereditor/usereditor.component.ts":
/*!****************************************************!*\
  !*** ./src/app/usereditor/usereditor.component.ts ***!
  \****************************************************/
/*! exports provided: UsereditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsereditorComponent", function() { return UsereditorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../userlist */ "./src/app/userlist.ts");



var UsereditorComponent = /** @class */ (function () {
    function UsereditorComponent() {
        this.currentuser = _userlist__WEBPACK_IMPORTED_MODULE_2__["userlist"][0]; //needs to be changed to observable
        this.newuserslist = _userlist__WEBPACK_IMPORTED_MODULE_2__["userlist"];
    }
    UsereditorComponent.prototype.ngOnInit = function () {
    };
    UsereditorComponent.prototype.changeuser = function (user) {
        this.currentuser = user;
    };
    UsereditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usereditor',
            template: __webpack_require__(/*! ./usereditor.component.html */ "./src/app/usereditor/usereditor.component.html"),
            styles: [__webpack_require__(/*! ./usereditor.component.css */ "./src/app/usereditor/usereditor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UsereditorComponent);
    return UsereditorComponent;
}());



/***/ }),

/***/ "./src/app/userinfo/userinfo.component.css":
/*!*************************************************!*\
  !*** ./src/app/userinfo/userinfo.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJpbmZvL3VzZXJpbmZvLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.html":
/*!**************************************************!*\
  !*** ./src/app/userinfo/userinfo.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n\n\n.picture {\n  float: left;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n}\n\n.userinfo{\n  float:left;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  background-color: salmon;\n  padding: 10px;\n  font-family: arial, sans-serif;\n}\n.roleinfo{\n  width: 20.5%;\n  float:left;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  background-color: salmon;\n  padding: 10px;\n  font-family: arial, sans-serif;\n}\n.textinfo{\n  border-collapse: collapse;\n  font-family: arial, sans-serif;\n}\ntd,th{\n  border-style: solid;\n  border-width: 1px;\n  border-color: gray;\n  background-color:white;\n  text-align: left;\n  min-width: 120px;\n}\n.sectionclass{\n  width:23%;\n  float:left;\n}\n.sectionpicture{\n  width: 20.5%;\n  float:left;\n  border-style: solid;\n  border-width: 2px;\n  border-color: black;\n  background-color: salmon;\n  padding: 10px;\n}\n\n</style>\n\n<body>\n  <section class=\"sectionpicture\">\n      <div class=\"picture\">\n        <img src=\"{{currentuser.picture}}\" alt=\"User picture\" style=\"width:300px;height:300px;border:0;\"/>\n      </div>\n      <br>\n      <div class=\"userinfo\">\n        <table class=\"textinfo\">\n          <caption><b>User details</b></caption>\n          <tr>\n            <th>User ID:</th>\n            <th>{{currentuser.id}}</th><!---later user.id-->\n          </tr>\n          <tr>\n            <th>Username:</th>\n            <th>{{currentuser.username}}</th><!---later user.id-->\n          </tr>\n          <tr>\n            <th>Role:</th>\n            <th>{{currentuser.role}}<img src=\"../assets/images/info.png\" style=\"width:15px;height:15px;border:0;\"></th><!---later user.role-->\n          </tr>\n          <tr>\n            <th>E-mail:</th>\n            <th>useremail</th><!---later user.contact-->\n          </tr>\n          <tr>\n            <th>Languages:</th>\n            <th>userlanguage</th><!---later user.language-->\n          </tr>\n        </table>\n      </div>\n  </section>\n  <section class=\"roleinfo\" style=\"margin-left: 20px\">\n    <p style=\"text-align:center\"><b>Role Permissions</b><br>Administrator</p><br><!---later user.role-->\n    <div style=\"font-size:12px\">\n      This role has no rules at the moment. It can do everything for development purposes.<br><br>Later the admin will be able to \n      modify userlists and change sensitive data about these users.\n      <br><br>\n      The role of administrator is that of quality control of the articles inside the building specification. If the size of the company doesn't allow \n      to have a person devoted to this task, everyone can be assigned the role of administrator. \n    </div>\n  </section>\n  <section class=\"sectionclass\" style=\"margin-left: 20px\">\n      <div class=\"userinfo\">\n          <table class=\"textinfo\">\n            <Caption><b>Comments</b></Caption>\n            <tr>\n              <th>Date:</th>\n              <th>Article:</th>\n              <!---here we loop through articles and search for comments made by this user and make a ngfor that depicts all comments in this table-->\n            </tr>\n          </table>\n        </div>\n  </section>\n  <section class=\"sectionclass\"style=\"margin-left: 20px\">\n      <div class=\"userinfo\">\n        <table class=\"textinfo\">\n          <Caption><b>Edited Articles</b></Caption>\n          <tr>\n            <th>Date:</th>\n            <th>Article:</th>\n            <!---here we loop through articles and search for temporary versions made by this user and make a ngfor that depicts all comments in this table-->\n          </tr>\n        </table>\n      </div>\n    </section>\n  <section class=\"sectionclass\">\n      \n  </section>\n</body>"

/***/ }),

/***/ "./src/app/userinfo/userinfo.component.ts":
/*!************************************************!*\
  !*** ./src/app/userinfo/userinfo.component.ts ***!
  \************************************************/
/*! exports provided: UserinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserinfoComponent", function() { return UserinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");
/* harmony import */ var _userlist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../userlist */ "./src/app/userlist.ts");




var UserinfoComponent = /** @class */ (function () {
    function UserinfoComponent() {
        this.currentuser = _userlist__WEBPACK_IMPORTED_MODULE_3__["userlist"][0];
    }
    UserinfoComponent.prototype.getuserdata = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _user__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserinfoComponent.prototype, "currentuser", void 0);
    UserinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userinfo',
            template: __webpack_require__(/*! ./userinfo.component.html */ "./src/app/userinfo/userinfo.component.html"),
            styles: [__webpack_require__(/*! ./userinfo.component.css */ "./src/app/userinfo/userinfo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserinfoComponent);
    return UserinfoComponent;
}());



/***/ }),

/***/ "./src/app/userlist.ts":
/*!*****************************!*\
  !*** ./src/app/userlist.ts ***!
  \*****************************/
/*! exports provided: userlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userlist", function() { return userlist; });
var userlist = [
    { id: 1, username: 'Andrew Malcolm', password: 'wachtwoord', role: 'specificationsmanager', picture: "../assets/dummyimages/architect.jpg" },
    { id: 2, username: 'Jeroen Werbrouck', password: 'wachtwoord', role: 'projectmanager', picture: "../assets/dummyimages/architect.jpg" },
    { id: 3, username: 'Sam Vanhee', password: 'wachtwoord', role: 'architect', picture: "../assets/dummyimages/architect.jpg" },
    { id: 4, username: 'Seppe Neyts', password: 'wachtwoord', role: 'visitor', picture: "../assets/dummyimages/architect.jpg" },
    { id: 5, username: 'creator', password: '', role: 'visitor', picture: "../assets/dummyimages/architect.jpg" }
];


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

module.exports = __webpack_require__(/*! C:\Users\andre\BSapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map