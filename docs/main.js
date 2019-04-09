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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_users_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/users-add/users-add.component */ "./src/app/components/users/users-add/users-add.component.ts");
/* harmony import */ var _components_users_users_sign_in_users_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/users/users-sign-in/users-sign-in.component */ "./src/app/components/users/users-sign-in/users-sign-in.component.ts");
/* harmony import */ var _components_weather_weater_display_weater_display_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weather/weater-display/weater-display.component */ "./src/app/components/weather/weater-display/weater-display.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");








var routes = [
    { path: 'users/create', component: _components_users_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_3__["UsersAddComponent"] },
    { path: 'users/login', component: _components_users_users_sign_in_users_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["UsersSignInComponent"] },
    { path: 'weather/:object', component: _components_weather_weater_display_weater_display_component__WEBPACK_IMPORTED_MODULE_5__["WeaterDisplayComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'payment/paypal', component: _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_7__["PaymentComponent"] },
    { path: '', redirectTo: 'users/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvYXBwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavAltMarkup\" aria-controls=\"navbarNavAltMarkup\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarNavAltMarkup\">\n        <ul class=\"navbar-nav\">\n\n        </ul>\n          <ul class=\"nav navbar-nav ml-auto\" *ngIf='!currentUser'>\n              <a class=\"nav-item nav-link\" href=\"#\" [routerLink]=\"['users/login']\" >Login</a>\n          </ul>\n          \n          <ul class=\"nav navbar-nav ml-auto\" *ngIf='currentUser'>\n              <a class=\"nav-item nav-link\"  href=\"#\">Welcome, {{currentUser.email}}</a>\n              <a class=\"nav-item nav-link\" (click)=\"Logout()\" [routerLink]=\"['users/login']\" >Logout</a>\n          </ul>\n      </div>\n    </nav>\n    <div class=\"jumbotron jumbotron-fluid\">\n        <div class=\"container\">\n          <h1 class=\"display-4\">My Weather App</h1>\n          <p class=\"lead\">The Weather Channel and weather.com provide a national and local weather forecast for cities, as well as weather radar, report and hurricane coverage.</p>\n          <p class=\"lead\" *ngIf='currentUser && currentUser.isMember == false'>Become a member to receive live updates on SMS by applying<a [routerLink]=\"['/payment/paypal']\"> here.</a></p>\n        </div>\n    </div>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

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
/* harmony import */ var _shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.title = 'myClientWeatherApp';
        this.userService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            console.log("In Success " + JSON.stringify(_this.currentUser));
        }, function (error) {
            console.log("Failed.");
        });
    }
    AppComponent.prototype.Logout = function () {
        location.reload();
        this.userService.logout();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
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
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-paypal */ "./node_modules/ngx-paypal/fesm5/ngx-paypal.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_users_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/users/users-add/users-add.component */ "./src/app/components/users/users-add/users-add.component.ts");
/* harmony import */ var _shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var _shared_services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/weather-data/weather-data.service */ "./src/app/shared/services/weather-data/weather-data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_users_users_sign_in_users_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/users/users-sign-in/users-sign-in.component */ "./src/app/components/users/users-sign-in/users-sign-in.component.ts");
/* harmony import */ var _components_weather_weater_display_weater_display_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/weather/weater-display/weater-display.component */ "./src/app/components/weather/weater-display/weater-display.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./auth/auth.interceptor */ "./src/app/auth/auth.interceptor.ts");
/* harmony import */ var _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/payment/payment.component */ "./src/app/components/payment/payment.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_users_users_add_users_add_component__WEBPACK_IMPORTED_MODULE_6__["UsersAddComponent"],
                _components_users_users_sign_in_users_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["UsersSignInComponent"],
                _components_weather_weater_display_weater_display_component__WEBPACK_IMPORTED_MODULE_12__["WeaterDisplayComponent"],
                _components_payment_payment_component__WEBPACK_IMPORTED_MODULE_15__["PaymentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], ngx_paypal__WEBPACK_IMPORTED_MODULE_3__["NgxPayPalModule"]
            ],
            providers: [_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"], _shared_services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_8__["WeatherDataService"], _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                    useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_14__["AuthInterceptor"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('userToken') != null)
            return true;
        this.router.navigate(['users/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth.interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(router) {
        this.router = router;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
        if (localStorage.getItem('userToken') != null) {
            var clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + localStorage.getItem('userToken'))
            });
            return next.handle(clonedreq)
                .do(function (succ) { }, function (err) {
                if (err.status === 401)
                    _this.router.navigateByUrl('users/login');
            });
        }
        else {
            this.router.navigateByUrl('users/login');
        }
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/components/payment/payment.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/payment/payment.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9wYXltZW50L3BheW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/payment/payment.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/payment/payment.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"mt-2\" *ngIf=\"showSuccess\">\n  <div class=\"alert alert-success mt-2\">\n    Yeah! Your <em>sandbox</em> transaction was successful.\n  </div>\n</div>\n\n<div class=\"mt-2\" *ngIf=\"showError\">\n  <div class=\"alert alert-danger mt-2\">\n    Oh no! Your <em>sandbox</em> transaction failed.\n  </div>\n</div>\n\n<div class=\"mt-2\" *ngIf=\"showCancel\">\n  <div class=\"alert alert-info mt-2\">\n    Your transaction was cancelled.\n  </div>\n</div>\n\n\n<div class=\"mt-2 text-center\">\n  <h5>Order Details</h5>\n  <hr>\n  <div class=\"alert alert-info mt-2\">\n    <p><b>Name: </b> MyWeatherApp</p>\n    <p><b>Offer: </b> Recieve by SMS</p>\n    <p><b>Value: </b> 9.99€</p>\n\n    <div class=\"mt-2\">\n        <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n      </div>\n  </div>\n  \n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/payment/payment.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/payment/payment.component.ts ***!
  \*********************************************************/
/*! exports provided: PaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentComponent", function() { return PaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);




var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(userService) {
        var _this = this;
        this.userService = userService;
        this.showSuccess = false;
        this.showCancel = false;
        this.showError = false;
        this.npmCode = "npm install ngx-paypal --save";
        this.userService.currentUser.subscribe(function (x) {
            _this.loggedInUser = x;
            console.log("In Success " + JSON.stringify(_this.loggedInUser));
        }, function (error) {
            console.log("Failed.");
        });
    }
    PaymentComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
        this.prettify();
    };
    PaymentComponent.prototype.updateUser = function () {
        var _this = this;
        debugger;
        this.userService.getUser(this.loggedInUser.usersId).subscribe(function (x) {
            _this.loggedInUser = x;
            console.log(_this.loggedInUser);
        }, function (error) {
            console.log("Failed...");
        });
        this.loggedInUser.isMember = 1;
        this.userService.updateUser(this.loggedInUser).subscribe(function (x) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Success', 'Operation was successfull');
        }, function (error1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Error', 'Operation was unsuccessful');
        });
    };
    PaymentComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'AXoM43qq23a4XRi3hmDVCmFZbcACephAKgGfTiOkXcwvO8gM5hP-e4GdKdU9TjFQT4wiHztF-qrlILh8',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: '9.99'
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'EUR',
                                    value: '9.99',
                                },
                            }
                        ]
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                _this.showSuccess = true;
                _this.updateUser();
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
                _this.showCancel = true;
            },
            onError: function (err) {
                console.log('OnError', err);
                _this.showError = true;
            },
            onClick: function () {
                console.log('onClick');
                _this.resetStatus();
            },
        };
    };
    PaymentComponent.prototype.resetStatus = function () {
        this.showError = false;
        this.showSuccess = false;
        this.showCancel = false;
    };
    PaymentComponent.prototype.prettify = function () {
        hljs.initHighlightingOnLoad();
    };
    PaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-payment',
            template: __webpack_require__(/*! ./payment.component.html */ "./src/app/components/payment/payment.component.html"),
            styles: [__webpack_require__(/*! ./payment.component.css */ "./src/app/components/payment/payment.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], PaymentComponent);
    return PaymentComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users-add/users-add.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/users/users-add/users-add.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy1hZGQvdXNlcnMtYWRkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/users/users-add/users-add.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/users/users-add/users-add.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\" style=\"text-align: center\">\n          <h1 class=\"display-4\">- Register Member -</h1>\n          <hr>\n  </div>\n<div class=\"col-5\">\n      <form> \n              <div class=\"form-group\">\n                  <label for=\"exampleFormControlInput1\">First Name</label>\n                  <input type=\"text\" [(ngModel)]=\"model.firstName\" name=\"firstName\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter First Name...\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Last name</label>\n                <input type=\"text\" [(ngModel)]=\"model.lastName\" name=\"lastName\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter last name..\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Email</label>\n                <input type=\"email\" [(ngModel)]=\"model.email\" name=\"email\" class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter Email..\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Password</label>\n                <input type=\"password\" [(ngModel)]=\"model.password\" name=\"password\"  class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter Password...\">\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"exampleFormControlInput1\">Mobile Number</label>\n                <input type=\"text\" [(ngModel)]=\"model.telNumber\" name=\"telNumber\"  class=\"form-control\" id=\"exampleFormControlInput1\" placeholder=\"Enter mobile number\">\n              </div>\n                  \n          <button type=\"button\" (click)=\"Register()\" class=\"btn btn-primary\">Submit</button>\n      </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/users/users-add/users-add.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/users-add/users-add.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersAddComponent", function() { return UsersAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_models_UserModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/UserModel */ "./src/app/shared/models/UserModel.ts");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var UsersAddComponent = /** @class */ (function () {
    function UsersAddComponent(userService) {
        this.userService = userService;
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        this.model = new src_app_shared_models_UserModel__WEBPACK_IMPORTED_MODULE_2__["UserModel"]();
    };
    UsersAddComponent.prototype.Register = function () {
        var _this = this;
        this.userService.addUser(this.model).subscribe(function (x) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', _this.model.email + ' added successfully');
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'Something wring happened');
        });
    };
    UsersAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-add',
            template: __webpack_require__(/*! ./users-add.component.html */ "./src/app/components/users/users-add/users-add.component.html"),
            styles: [__webpack_require__(/*! ./users-add.component.css */ "./src/app/components/users/users-add/users-add.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], UsersAddComponent);
    return UsersAddComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users-sign-in/users-sign-in.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/users/users-sign-in/users-sign-in.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91c2Vycy91c2Vycy1zaWduLWluL3VzZXJzLXNpZ24taW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/users/users-sign-in/users-sign-in.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/users/users-sign-in/users-sign-in.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"row\">\n      <div class=\"col-md-12\" style=\"text-align: center\">\n              <h1 class=\"display-4\">- Login -</h1>\n              <hr>\n      </div>\n  <div class=\"col-md-6 offset-md-3\">\n          <form  (ngSubmit)=\"OnSubmit()\"> \n                  <div class=\"form-group\">\n                      <label for=\"exampleFormControlInput1\">Email address</label>\n                      <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" class=\"form-control\"  placeholder=\"name@example.com\" required>\n                  </div>\n                  <div class=\"form-group\">\n                      <label for=\"exampleFormControlInput1\">Password</label>\n                      <input type=\"password\"   [(ngModel)]=\"user.password\" name=\"password\" class=\"form-control\"  placeholder=\"Enter password\" required>\n                  </div>\n\n                  <div class=\"form-check form-check-inline\" *ngFor=\"let c of checkBoxes\">\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"weatherMain\" (click)=\"check(c)\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">{{c.value}}</label>\n                  </div>\n\n              <hr>\n              <button class=\"btn btn-primary\">Login</button>\n              <hr>\n              <h6>Create a new account  <a  [routerLink]=\"['/users/create']\">Register</a></h6>\n              <hr>\n          </form>\n  </div>\n<div>   \n"

/***/ }),

/***/ "./src/app/components/users/users-sign-in/users-sign-in.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/users-sign-in/users-sign-in.component.ts ***!
  \***************************************************************************/
/*! exports provided: UsersSignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersSignInComponent", function() { return UsersSignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/users/users.service */ "./src/app/shared/services/users/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_shared_models_UserModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/UserModel */ "./src/app/shared/models/UserModel.ts");
/* harmony import */ var src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/weatherCheckBox */ "./src/app/shared/models/weatherCheckBox.ts");







var UsersSignInComponent = /** @class */ (function () {
    function UsersSignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UsersSignInComponent.prototype.ngOnInit = function () {
        this.user = new src_app_shared_models_UserModel__WEBPACK_IMPORTED_MODULE_5__["UserModel"]();
        this.checkBoxes = [new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'Min/Max Temperatue'),
            new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'Weather'),
            new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'Weathern Desc'),
            new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'Humidity'),
            new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'wind Speed'),
            new src_app_shared_models_weatherCheckBox__WEBPACK_IMPORTED_MODULE_6__["weatherCheckBox"](false, 'Wind Degrees')];
    };
    UsersSignInComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.userService.userAuthentication(this.user).subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            _this.userService.getUserClaims().subscribe();
            _this.router.navigate(['/weather/', JSON.stringify(_this.checkBoxes)]);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Success', ' Logged in successfully');
        }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Error', 'login unsuccesfully');
        });
    };
    UsersSignInComponent.prototype.check = function (checkBoxValue) {
        if (checkBoxValue.isChecked == false) {
            checkBoxValue.isChecked = true;
        }
        else {
            checkBoxValue.isChecked = false;
        }
    };
    UsersSignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users-sign-in',
            template: __webpack_require__(/*! ./users-sign-in.component.html */ "./src/app/components/users/users-sign-in/users-sign-in.component.html"),
            styles: [__webpack_require__(/*! ./users-sign-in.component.css */ "./src/app/components/users/users-sign-in/users-sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_users_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersSignInComponent);
    return UsersSignInComponent;
}());



/***/ }),

/***/ "./src/app/components/weather/weater-display/weater-display.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/weather/weater-display/weater-display.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".strokeme\r\n{\r\n    color: white;\r\n    text-shadow:\r\n    -1px -1px 0 #000,\r\n    1px -1px 0 #000,\r\n    -1px 1px 0 #000,\r\n    1px 1px 0 #000;  \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3dlYXRoZXIvd2VhdGVyLWRpc3BsYXkvd2VhdGVyLWRpc3BsYXkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxZQUFZO0lBQ1o7Ozs7a0JBSWM7QUFDbEIiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvd2VhdGhlci93ZWF0ZXItZGlzcGxheS93ZWF0ZXItZGlzcGxheS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0cm9rZW1lXHJcbntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OlxyXG4gICAgLTFweCAtMXB4IDAgIzAwMCxcclxuICAgIDFweCAtMXB4IDAgIzAwMCxcclxuICAgIC0xcHggMXB4IDAgIzAwMCxcclxuICAgIDFweCAxcHggMCAjMDAwOyAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/weather/weater-display/weater-display.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/weather/weater-display/weater-display.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n  <div class=\"col-md-12\" style=\"text-align: center\">\n          <h1 class=\"display-4\">- Weather Data -</h1> <button type=\"button\" *ngIf=\"checkBoxList[0].isChecked == true\" (click)=\"conversion(weather.mainTemp_max, weather.mainTemp_min)\"class=\"btn btn-outline-dark btn-sm\">Convert to {{temperature? 'Celcuis' : 'Fahreinheit'}}</button>\n          <hr>\n  </div>\n\n  <div class=\"card text-white bg-info offset-1 col-md-10 text-center\">\n    <div class=\"card-header align-middle\"><h2>{{curDate | date:'EEEE'}}</h2></div>\n    <div class=\"card-body\">\n        <img src=\"http://openweathermap.org/img/w/10d.png\" width=\"30%\"/>\n      <h5 class=\"card-title\" *ngIf=\"checkBoxList[0].isChecked == true\">{{weather.mainTemp_max |  number : '1.2-2'}} {{temperature? \t'°F' : '°C'}} / {{weather.mainTemp_min |  number : '1.2-2'}} {{temperature? \t'°F' : '°C'}}</h5>\n\n      <h3 *ngIf=\"checkBoxList[1].isChecked == true\">{{weather.weatherMain}}</h3>\n      <h3 *ngIf=\"checkBoxList[2].isChecked == true\">{{weather.weatherDesc}}</h3>\n      <hr>\n      <span>\n        <p *ngIf=\"checkBoxList[3].isChecked == true\"> Hum: {{weather.mainHumidity}}</p>\n        <p *ngIf=\"checkBoxList[4].isChecked == true\">Wind Speed: {{weather.windSpeed}}</p>\n        <p *ngIf=\"checkBoxList[5].isChecked == true\">Wind Degrees: {{weather.windDegrees}}</p>\n        <ngx-paypal [config]=\"payPalConfig\"></ngx-paypal>\n    </span>\n    </div>\n  </div>\n\n  \n\n  "

/***/ }),

/***/ "./src/app/components/weather/weater-display/weater-display.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/weather/weater-display/weater-display.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WeaterDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeaterDisplayComponent", function() { return WeaterDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/weather-data/weather-data.service */ "./src/app/shared/services/weather-data/weather-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var WeaterDisplayComponent = /** @class */ (function () {
    function WeaterDisplayComponent(weatherService, route) {
        this.weatherService = weatherService;
        this.route = route;
        this.curDate = new Date();
    }
    WeaterDisplayComponent.prototype.ngOnInit = function () {
        this.temperature = true;
        var checkboxList4 = JSON.parse(this.route.snapshot.paramMap.get('object'));
        this.checkBoxList = checkboxList4;
        console.log(this.checkBoxList);
        this.loadData();
    };
    WeaterDisplayComponent.prototype.loadData = function () {
        var _this = this;
        this.weatherService.getWeather().subscribe(function (x) { return _this.weather = x; });
    };
    WeaterDisplayComponent.prototype.conversion = function (temp_max, temp_min) {
        debugger;
        if (this.temperature) {
            this.weather.mainTemp_max = this.convertToCelsius(temp_max);
            this.weather.mainTemp_min = this.convertToCelsius(temp_min);
            this.temperature = false;
        }
        else if (!this.temperature) {
            this.weather.mainTemp_max = this.convertToFahreinheit(temp_max);
            this.weather.mainTemp_min = this.convertToFahreinheit(temp_min);
            this.temperature = true;
        }
    };
    WeaterDisplayComponent.prototype.convertToFahreinheit = function (tempCelsius) {
        return (tempCelsius * 9 / 5) + 32;
    };
    WeaterDisplayComponent.prototype.convertToCelsius = function (tempFahreinheit) {
        return (tempFahreinheit - 32) * 5 / 9;
    };
    WeaterDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-weater-display',
            template: __webpack_require__(/*! ./weater-display.component.html */ "./src/app/components/weather/weater-display/weater-display.component.html"),
            styles: [__webpack_require__(/*! ./weater-display.component.css */ "./src/app/components/weather/weater-display/weater-display.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_weather_data_weather_data_service__WEBPACK_IMPORTED_MODULE_2__["WeatherDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], WeaterDisplayComponent);
    return WeaterDisplayComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/UserModel.ts":
/*!********************************************!*\
  !*** ./src/app/shared/models/UserModel.ts ***!
  \********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel() {
    }
    return UserModel;
}());



/***/ }),

/***/ "./src/app/shared/models/weatherCheckBox.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/models/weatherCheckBox.ts ***!
  \**************************************************/
/*! exports provided: weatherCheckBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherCheckBox", function() { return weatherCheckBox; });
var weatherCheckBox = /** @class */ (function () {
    function weatherCheckBox(isChecked, value) {
        this.isChecked = isChecked;
        this.value = value;
    }
    return weatherCheckBox;
}());



/***/ }),

/***/ "./src/app/shared/services/users/users.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/users/users.service.ts ***!
  \********************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BaseAddress;
        this.reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'No-Auth': 'True' });
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    UsersService.prototype.getUser = function (usedId) {
        return this.http.get(this.baseUrl + 'api/users/getuser/' + usedId);
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(this.baseUrl + 'api/users/create', user, { headers: this.reqHeader });
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.post(this.baseUrl + 'api/users/update', user, { headers: this.reqHeader });
    };
    UsersService.prototype.userAuthentication = function (user) {
        var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
        var reqHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(this.baseUrl + 'token', data, { headers: reqHeader });
    };
    UsersService.prototype.getUserClaims = function () {
        var _this = this;
        return this.http.get(this.baseUrl + 'api/GetUserClaims')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(user);
                _this.currentUserSubject.next(user);
            }
        }));
    };
    UsersService.prototype.logout = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/users/login');
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/shared/services/weather-data/weather-data.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/weather-data/weather-data.service.ts ***!
  \**********************************************************************/
/*! exports provided: WeatherDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataService", function() { return WeatherDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var WeatherDataService = /** @class */ (function () {
    function WeatherDataService(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BaseAddress;
    }
    WeatherDataService.prototype.getWeather = function () {
        return this.http.get(this.baseUrl + 'api/weather');
    };
    WeatherDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WeatherDataService);
    return WeatherDataService;
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
    production: false,
    BaseAddress: 'https://a100196-001-site1.atempurl.com/'
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

module.exports = __webpack_require__(/*! C:\Users\Damiano\Documents\AngularRepository\DamianoNicastroDTP\myClientWeatherApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map