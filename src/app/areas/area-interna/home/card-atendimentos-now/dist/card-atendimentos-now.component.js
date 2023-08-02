"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardAtendimentosNowComponent = void 0;
var core_1 = require("@angular/core");
var CardAtendimentosNowComponent = /** @class */ (function () {
    function CardAtendimentosNowComponent() {
        this.haClientesDepois = false;
        this.clientes = [
            {
                id: 1,
                nome: 'João Silva',
                data: '2023-06-08 15:01:01.000',
                presencial: true,
                check: false,
                imagem: 'https://br.freepik.com/fotos/pessoa-rosto'
            },
            {
                id: 2,
                nome: 'Maria Santos',
                data: '2023-07-1 23:30:01.000',
                presencial: true,
                check: false,
                imagem: 'https://br.freepik.com/fotos-premium/pessoas-mulheres-negocios-e-conceito-de-retrato-rosto-de-jovem-sorridente-feliz_35825872.html'
            },
            {
                id: 3,
                nome: 'Pedro Almeida',
                data: '2023-06-08 13:01:01.000',
                presencial: false,
                check: false,
                imagem: 'https://imasters.com.br/noticia/programador-usa-ia-para-criar-rostos-de-pessoas-que-nao-existem'
            },
            {
                id: 4,
                nome: 'Ana Pereira',
                data: '2023-07-1 23:15:01.000',
                presencial: true,
                check: false,
                imagem: 'https://br.freepik.com/fotos-premium/foto-de-rosto-de-mulher-jovem-latina-feliz-com-fundo-de-expressao-de-sorriso-com-espaco-de-copia-retrato-de-rosto-de-pessoas-reais-etnicas-da-america-do-sul-boliviana_16104571.htm'
            },
            {
                id: 5,
                nome: 'Mariana Oliveira',
                data: '2023-05-08 15:01:01.000',
                presencial: true,
                check: false,
                imagem: 'https://noticias.r7.com/tecnologia-e-ciencia/fotos/site-apavorante-cria-rostos-de-pessoas-que-nunca-existiram-21022019'
            },
            {
                id: 6,
                nome: 'Lucas Martins',
                data: '2023-07-1 23:48:01.000',
                presencial: false,
                check: false,
                imagem: 'https://super.abril.com.br/tecnologia/site-cria-rostos-perfeitamente-reais-usando-inteligencia-artificial'
            },
            {
                id: 7,
                nome: 'Carolina Lima',
                data: '2023-07-08 12:01:01.000',
                presencial: true,
                check: false,
                imagem: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-04.png'
            },
            {
                id: 8,
                nome: 'Rafaela Ferreira',
                data: '2023-05-08 11:01:01.000',
                presencial: false,
                check: false,
                imagem: 'https://noticias.r7.com/tecnologia-e-ciencia/fotos/site-apavorante-cria-rostos-de-pessoas-que-nunca-existiram-21022019'
            },
            {
                id: 9,
                nome: 'Gustavo Sousa',
                data: '2023-07-14 20:01:01.000',
                presencial: true,
                check: false,
                imagem: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-08.png'
            },
            {
                id: 10,
                nome: 'Juliana Costa',
                data: '2023-07-08 13:01:01.000',
                presencial: false,
                check: false,
                imagem: 'https://br.freepik.com/fotos/rostos-pessoas'
            },
            {
                id: 11,
                nome: 'Fernanda Rodrigues',
                data: '2023-07-14 12:01:01.000',
                presencial: false,
                check: false,
                imagem: 'https://unsplash.com/pt-br/fotografias/uma-mulher-com-um-sorriso-no-rosto-lh9_ATRPKJQ'
            },
        ];
        this.horaAtual = new Date().getTime();
        this.clienteDepois = new Array();
        this.primeirosClientesHoje = new Array();
    }
    CardAtendimentosNowComponent.prototype.ngOnInit = function () {
        this.filtrarClientes();
    };
    CardAtendimentosNowComponent.prototype.presencial = function (bool) {
        if (bool == true) {
            return 'Presencial';
        }
        else {
            return 'Virtual';
        }
    };
    CardAtendimentosNowComponent.prototype.filtrarClientes = function () {
        var _this = this;
        var hoje = new Date();
        var clientesHoje = this.clientes.filter(function (cliente) {
            var dataCliente = new Date(cliente.data);
            return (dataCliente.getFullYear() === hoje.getFullYear() &&
                dataCliente.getMonth() === hoje.getMonth() &&
                dataCliente.getDate() === hoje.getDate());
        });
        this.primeirosClientesHoje = clientesHoje
            .filter(function (cliente) {
            var horaCliente = new Date(cliente.data).getTime();
            return horaCliente > _this.horaAtual;
        })
            .slice(0, 3)
            .sort(function (a, b) {
            var horaA = new Date(a.data).getTime();
            var horaB = new Date(b.data).getTime();
            return horaA - horaB;
        });
        this.clienteAgora = this.primeirosClientesHoje.at(0);
        if (this.primeirosClientesHoje.length > 1) {
            this.clienteDepois.push(this.primeirosClientesHoje[1]);
            if (this.primeirosClientesHoje.length > 2) {
                this.clienteDepois.push(this.primeirosClientesHoje[2]);
            }
        }
        if (this.clienteDepois.length > 0) {
            this.haClientesDepois = true;
        }
        console.log(this.haClientesDepois);
        console.log(this.clienteDepois.length);
        console.log(this.clienteDepois);
    };
    CardAtendimentosNowComponent = __decorate([
        core_1.Component({
            selector: 'app-card-atendimentos-now',
            templateUrl: './card-atendimentos-now.component.html',
            styleUrls: ['./card-atendimentos-now.component.scss']
        })
    ], CardAtendimentosNowComponent);
    return CardAtendimentosNowComponent;
}());
exports.CardAtendimentosNowComponent = CardAtendimentosNowComponent;
