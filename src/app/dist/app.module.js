"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
// used to create fake backend
var helpers_1 = require("./helpers");
var app_routing_module_1 = require("./app-routing.module");
var helpers_2 = require("./helpers");
var app_component_1 = require("./app.component");
var components_1 = require("./shared/components");
var sidebar_component_1 = require("./shared/sidebar/sidebar.component");
var navbar_component_1 = require("./shared/navbar/navbar.component");
var animations_1 = require("@angular/platform-browser/animations");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var menu_1 = require("@angular/material/menu");
var icon_1 = require("@angular/material/icon");
var divider_1 = require("@angular/material/divider");
var list_1 = require("@angular/material/list");
;
var layout_1 = require("@angular/cdk/layout");
var common_1 = require("@angular/common");
var button_1 = require("@angular/material/button");
var users_routing_module_1 = require("./areas/area-interna/users-routing.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule,
                angular_fontawesome_1.FontAwesomeModule,
                animations_1.BrowserAnimationsModule,
                // * MATERIAL IMPORTS
                sidenav_1.MatSidenavModule,
                toolbar_1.MatToolbarModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                divider_1.MatDividerModule,
                list_1.MatListModule,
                layout_1.LayoutModule,
                button_1.MatButtonModule,
                users_routing_module_1.UsersRoutingModule,
                common_1.NgIf,
            ],
            declarations: [
                app_component_1.AppComponent,
                components_1.AlertComponent,
                sidebar_component_1.SidebarComponent,
                navbar_component_1.NavbarComponent,
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: helpers_2.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: helpers_2.ErrorInterceptor, multi: true },
                // provider used to create fake backend
                helpers_1.fakeBackendProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
;
