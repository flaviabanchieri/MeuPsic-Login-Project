"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UsersModule = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var table_1 = require("@angular/material/table");
var ng_apexcharts_1 = require("ng-apexcharts");
var layout_component_1 = require("./layout/layout.component");
var home_1 = require("./home");
var card_agenda_semana_component_1 = require("./home/card-agenda-semana/card-agenda-semana.component");
var card_anotacao_component_1 = require("./home/card-anotacao/card-anotacao.component");
var card_atendimentos_now_component_1 = require("./home/card-atendimentos-now/card-atendimentos-now.component");
var card_financeiro_component_1 = require("./home/card-financeiro/card-financeiro.component");
var users_routing_module_1 = require("./users-routing.module");
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        core_1.NgModule({
            declarations: [
                layout_component_1.LayoutComponent,
                card_atendimentos_now_component_1.CardAtendimentosNowComponent,
                home_1.HomeComponent,
                card_financeiro_component_1.CardFinanceiroComponent,
                card_anotacao_component_1.CardAnotacaoComponent,
                card_agenda_semana_component_1.CardAgendaSemanaComponent,
            ],
            imports: [
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                users_routing_module_1.UsersRoutingModule,
                ng_apexcharts_1.NgApexchartsModule,
                table_1.MatTableModule,
            ]
        })
    ], UsersModule);
    return UsersModule;
}());
exports.UsersModule = UsersModule;
