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
        this.anotacoes = [
            { id: 1, check: true, arquivado: false, anotacao: 'Comprar água' },
            { id: 2, check: false, arquivado: false, anotacao: 'Agendar consulta com paciente X' },
            { id: 3, check: false, arquivado: false, anotacao: 'Preparar material para a próxima sessão' },
            { id: 4, check: true, arquivado: false, anotacao: 'Enviar lembrete de consulta para paciente Y' },
            { id: 5, check: false, arquivado: false, anotacao: 'Revisar anotações da última sessão' },
            { id: 6, check: true, arquivado: false, anotacao: 'Participar de reunião com a equipe' },
            { id: 7, check: false, arquivado: false, anotacao: 'Ligar para fornecedor de material de escritório' },
            { id: 8, check: true, arquivado: false, anotacao: 'Organizar agenda da semana seguinte' },
            { id: 9, check: false, arquivado: false, anotacao: 'Enviar relatório de atendimentos para a diretoria' },
            { id: 10, check: true, arquivado: false, anotacao: 'Receber pagamento do paciente Z' },
            { id: 11, check: true, arquivado: false, anotacao: 'Atualizar prontuário do paciente X' }
        ];
        this.anotacoesMostradas = this.anotacoes.filter(function (x) { return x.arquivado == false; });
    }
    CardAnotacaoComponent.prototype.checkAnotacao = function (id) {
        var anotacao = this.anotacoes.filter(function (x) { return x.id == id; });
        if (anotacao[0].check) {
            anotacao[0].check = false;
        }
        else {
            anotacao[0].check = true;
        }
    };
    CardAnotacaoComponent.prototype.arquivar = function (id) {
        var notas = this.anotacoes.filter(function (x) { return x.id == id; });
        notas[0].arquivado = true;
    };
    CardAnotacaoComponent.prototype.ngOnInit = function () {
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
