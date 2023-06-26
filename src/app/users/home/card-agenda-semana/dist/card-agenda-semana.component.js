"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardAgendaSemanaComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var table_1 = require("@angular/material/table");
var CardAgendaSemanaComponent = /** @class */ (function () {
    function CardAgendaSemanaComponent() {
        this.currentDate = new Date();
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];
        this.weeks = [
            [
                new Date(2019, 11, 1),
                new Date(2019, 11, 2),
                new Date(2019, 11, 3),
                new Date(2019, 11, 4),
                new Date(2019, 11, 5),
                new Date(2019, 11, 6),
                new Date(2019, 11, 7)
            ],
            [
                new Date(2019, 11, 8),
                new Date(2019, 11, 9),
                new Date(2019, 11, 10),
                new Date(2019, 11, 11),
                new Date(2019, 11, 12),
                new Date(2019, 11, 13),
                new Date(2019, 11, 14),
            ],
            [
                new Date(2019, 11, 15),
                new Date(2019, 11, 16),
                new Date(2019, 11, 17),
                new Date(2019, 11, 18),
                new Date(2019, 11, 19),
                new Date(2019, 11, 20),
                new Date(2019, 11, 21),
            ],
            [
                new Date(2019, 11, 22),
                new Date(2019, 11, 23),
                new Date(2019, 11, 24),
                new Date(2019, 11, 25),
                new Date(2019, 11, 26),
                new Date(2019, 11, 27),
                new Date(2019, 11, 28),
            ],
            [
                new Date(2019, 11, 29),
                new Date(2019, 11, 30),
                new Date(2019, 11, 31),
            ]
        ];
    }
    CardAgendaSemanaComponent.prototype.ngOnInit = function () {
    };
    CardAgendaSemanaComponent.prototype.getMonth = function () {
        return this.months[this.currentDate.getMonth()];
    };
    CardAgendaSemanaComponent.prototype.getFirstDay = function () {
        return this.days[this.currentDate.getDay()];
    };
    CardAgendaSemanaComponent.prototype.getYear = function () {
        return this.currentDate.getFullYear();
    };
    CardAgendaSemanaComponent = __decorate([
        core_1.Component({
            selector: 'app-card-agenda-semana',
            templateUrl: './card-agenda-semana.component.html',
            styleUrls: ['./card-agenda-semana.component.scss'],
            standalone: true,
            imports: [table_1.MatTableModule, common_1.NgIf, common_1.NgFor]
        })
    ], CardAgendaSemanaComponent);
    return CardAgendaSemanaComponent;
}());
exports.CardAgendaSemanaComponent = CardAgendaSemanaComponent;
