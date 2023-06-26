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
var ELEMENT_DATA = [
    { dia: 'Seg', data: 1, agenda: 'Hydrogen' },
    { dia: 'Ter', data: 2, agenda: 'Helium' },
    { dia: 'Qua', data: 3, agenda: 'Lithium' },
    { dia: 'Qui', data: 4, agenda: 'Beryllium' },
    { dia: 'Sex', data: 5, agenda: 'Boron' },
    { dia: 'Sab', data: 6, agenda: 'Carbon' },
    { dia: 'Dom', data: 7, agenda: 'Nitrogen' },
    { dia: 'Seg', data: 8, agenda: 'Oxygen' },
    { dia: 'Ter', data: 9, agenda: 'Fluorine' },
    { dia: 'Ter', data: 9, agenda: 'Neon' },
];
var CardAgendaSemanaComponent = /** @class */ (function () {
    function CardAgendaSemanaComponent() {
        this.displayedColumns = ['data', 'agenda'];
        this.dataSource = ELEMENT_DATA;
        this.duplicatedDates = new Set();
        this.mostrar = false;
    }
    CardAgendaSemanaComponent.prototype.populateTableData = function () {
        var _this = this;
        this.dataSource = this.dataSource.map(function (event) {
            if (_this.duplicatedDates.has(event.data)) {
                event.transparent = true; // Adiciona a propriedade "transparent" ao objeto do evento
            }
            else {
                _this.duplicatedDates.add(event.data);
            }
            return event;
        });
    };
    CardAgendaSemanaComponent.prototype.ngOnInit = function () {
        this.populateTableData();
    };
    CardAgendaSemanaComponent = __decorate([
        core_1.Component({
            selector: 'app-card-agenda-semana',
            templateUrl: './card-agenda-semana.component.html',
            styleUrls: ['./card-agenda-semana.component.scss']
        })
    ], CardAgendaSemanaComponent);
    return CardAgendaSemanaComponent;
}());
exports.CardAgendaSemanaComponent = CardAgendaSemanaComponent;
