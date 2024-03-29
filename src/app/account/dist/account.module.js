"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountModule = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var account_routing_module_1 = require("./account-routing.module");
var layout_component_1 = require("./layout.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                account_routing_module_1.AccountRoutingModule,
                angular_fontawesome_1.FontAwesomeModule,
            ],
            declarations: [
                layout_component_1.LayoutComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ]
        })
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
