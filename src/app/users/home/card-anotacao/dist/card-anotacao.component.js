"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardAnotacaoComponent = void 0;
var core_1 = require("@angular/core");
var CardAnotacaoComponent = /** @class */ (function () {
    function CardAnotacaoComponent() {
    }
    CardAnotacaoComponent.prototype.ngOnInit = function () {
        this.anotacao();
    };
    CardAnotacaoComponent.prototype.anotacao = function () {
        this.anotacoes = [
            { anotacao: 'Comprar papel', checked: true },
            { anotacao: 'Estudar para o exame', checked: false },
            { anotacao: 'Marcar consulta médica', checked: false },
            { anotacao: 'Pagar contas de luz', checked: true },
            { anotacao: 'Ligar para o cliente X', checked: false },
            { anotacao: 'Fazer exercícios físicos', checked: true },
            { anotacao: 'Preparar jantar', checked: false },
            { anotacao: 'Comprar leite', checked: true },
            { anotacao: 'Conferir e-mails', checked: false },
            { anotacao: 'Enviar relatório', checked: false },
            { anotacao: 'Ler um livro', checked: true },
            { anotacao: 'Organizar armário', checked: false },
            { anotacao: 'Agendar viagem', checked: false },
            { anotacao: 'Resolver problema no computador', checked: true },
            { anotacao: 'Fazer compras', checked: false },
            { anotacao: 'Assistir a um filme', checked: true },
            { anotacao: 'Limpar a casa', checked: false },
            { anotacao: 'Fazer anotações', checked: false },
            { anotacao: 'Estudar um novo idioma', checked: true },
            { anotacao: 'Comprar presentes de aniversário', checked: false },
            { anotacao: 'Planejar férias', checked: false },
        ];
    };
    CardAnotacaoComponent = __decorate([
        core_1.Component({
            selector: 'app-card-anotacao',
            templateUrl: './card-anotacao.component.html',
            styleUrls: ['./card-anotacao.component.scss']
        })
    ], CardAnotacaoComponent);
    return CardAnotacaoComponent;
}());
exports.CardAnotacaoComponent = CardAnotacaoComponent;
