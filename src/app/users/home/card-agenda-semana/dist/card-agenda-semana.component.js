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
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
];
/**
 * @title Binding event handlers and properties to the table rows.
 */
var CardAgendaSemanaComponent = /** @class */ (function () {
    function CardAgendaSemanaComponent() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.clickedRows = new Set();
    }
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
