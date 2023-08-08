"use strict";
exports.__esModule = true;
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var dados_clientes_component_1 = require("./dados_clientes.component");
describe('DadosClientesComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dados_clientes_component_1.DadosClientesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(dados_clientes_component_1.DadosClientesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
