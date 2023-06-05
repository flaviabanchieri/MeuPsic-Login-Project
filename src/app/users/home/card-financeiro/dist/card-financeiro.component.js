"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardFinanceiroComponent = void 0;
var core_1 = require("@angular/core");
var CardFinanceiroComponent = /** @class */ (function () {
    function CardFinanceiroComponent() {
        this.chartOptions = {
            series: [
                {
                    name: "Horas trabalhadas",
                    type: "column",
                    data: [8, 7, 10, 9, 8, 5, 3, 4, 8, 7, 7, 5]
                },
                {
                    name: "Valor ganho",
                    type: "line",
                    data: [320, 180, 750, 320, 430, 220, 170, 310, 220, 220, 120, 160]
                }
            ],
            chart: {
                height: 350,
                type: "line",
                toolbar: {
                    show: false
                },
                zoom: {
                    enabled: false
                }
            },
            stroke: {
                width: [0, 4]
            },
            title: {
                text: "Relatório Semanal"
            },
            dataLabels: {
                enabled: true,
                enabledOnSeries: [1]
            },
            labels: [
                "01 Jan 2001",
                "02 Jan 2001",
                "03 Jan 2001",
                "04 Jan 2001",
                "05 Jan 2001",
                "06 Jan 2001",
                "07 Jan 2001",
                "08 Jan 2001",
                "09 Jan 2001",
                "10 Jan 2001",
                "11 Jan 2001",
                "12 Jan 2001"
            ],
            xaxis: {
                type: "datetime"
            },
            yaxis: [
                {
                    title: {
                        text: "Horas trabalhadas"
                    }
                },
                {
                    opposite: true,
                    title: {
                        text: "Valor ganho"
                    }
                }
            ]
        };
    }
    __decorate([
        core_1.ViewChild("chart")
    ], CardFinanceiroComponent.prototype, "chart");
    CardFinanceiroComponent = __decorate([
        core_1.Component({
            selector: "app-card-financeiro",
            templateUrl: "./card-financeiro.component.html",
            styleUrls: ["./card-financeiro.component.scss"]
        })
    ], CardFinanceiroComponent);
    return CardFinanceiroComponent;
}());
exports.CardFinanceiroComponent = CardFinanceiroComponent;
