"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PainelClientesComponent = void 0;
var core_1 = require("@angular/core");
var ClientesFake_1 = require("@app/fakeData/ClientesFake");
var PainelClientesComponent = /** @class */ (function () {
    function PainelClientesComponent(router) {
        this.router = router;
        this.clientes = new Array();
        this.filtrar = false;
    }
    PainelClientesComponent.prototype.ngOnInit = function () {
        this.obterClientes();
    };
    PainelClientesComponent.prototype.obterClientes = function () {
        this.clientes = ClientesFake_1["default"];
        this.clientes.forEach(function (cliente) {
            if (cliente.nome) {
                var nomeSobrenome = cliente.nome.split(' '); // Divide o nome em partes separadas por espaço
                var primeiraLetraNome = nomeSobrenome[0].charAt(0);
                var primeiraLetraSobrenome = nomeSobrenome[1] ? nomeSobrenome[1].charAt(0) : '';
                cliente.inicial = primeiraLetraNome + primeiraLetraSobrenome;
            }
            else {
                cliente.inicial = 'S/N';
            }
        });
    };
    PainelClientesComponent.prototype.abrirFiltro = function () {
        this.filtrar = !this.filtrar;
    };
    PainelClientesComponent.prototype.abrirCliente = function (cliente) {
        this.router.navigate(["/cliente/" + cliente.id]);
    };
    PainelClientesComponent.prototype.cadastrarCliente = function () {
        this.router.navigate(["/cliente/" + 0]);
    };
    PainelClientesComponent = __decorate([
        core_1.Component({
            selector: 'app-painel_clientes',
            templateUrl: './painel-clientes.component.html',
            styleUrls: ['./painel-clientes.component.scss']
        })
    ], PainelClientesComponent);
    return PainelClientesComponent;
}());
exports.PainelClientesComponent = PainelClientesComponent;
