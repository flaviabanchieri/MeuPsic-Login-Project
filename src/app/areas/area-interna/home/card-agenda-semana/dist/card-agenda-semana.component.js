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
    { dia: 'Seg', data: 1, hora: '14:30', descricao: 'Ligar para Maria', tag: 'blue' },
    { dia: 'Ter', data: 2, hora: '15:20', descricao: 'Ir no mercado comprar presentes', tag: 'gray' },
    { dia: 'Qua', data: 3, hora: '09:30', descricao: 'Ligar para João', tag: 'blue' },
    { dia: 'Qua', data: 3, hora: '20:00', descricao: 'Ligar para Pedro', tag: 'blue' },
    { dia: 'Sex', data: 5, hora: '14:30', descricao: 'Aniversário de João', tag: 'green' },
    { dia: 'Sab', data: 6, hora: '14:30', descricao: 'Carbon', tag: 'purple' },
    { dia: 'Dom', data: 7, hora: '14:30', descricao: 'Nitrogen', tag: 'blue' },
    { dia: 'Seg', data: 8, hora: '14:30', descricao: 'Oxygen', tag: 'purple' },
    { dia: 'Ter', data: 9, hora: '14:30', descricao: 'Fluorine', tag: 'blue' },
    { dia: 'Ter', data: 9, hora: '14:30', descricao: 'Neon', tag: 'purple' },
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
