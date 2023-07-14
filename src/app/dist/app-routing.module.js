"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var helpers_1 = require("./helpers");
var accountModule = function () { return Promise.resolve().then(function () { return require('./areas/area-externa/account.module'); }).then(function (x) { return x.AccountModule; }); };
var usersModule = function () { return Promise.resolve().then(function () { return require('./areas/area-interna/users.module'); }).then(function (x) { return x.UsersModule; }); };
var routes = [
    /* { path: '', component: LayoutComponent, canActivate: [AuthGuard] }, */
    { path: '', loadChildren: usersModule, canActivate: [helpers_1.AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
