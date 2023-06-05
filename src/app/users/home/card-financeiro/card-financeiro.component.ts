import { Component, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexYAxis,
  ApexTooltip,
  ApexTitleSubtitle,
  ApexXAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  labels: string[];
  stroke: any; // ApexStroke;
  dataLabels: any; // ApexDataLabels;
  fill: ApexFill;
};

@Component({
  selector: "app-card-financeiro",
  templateUrl: "./card-financeiro.component.html",
  styleUrls: ["./card-financeiro.component.scss"]
})
export class CardFinanceiroComponent {
  @ViewChild("chart") chart?: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  constructor() {
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
          data: [320, 180, 750, 320, 430, 220, 170, 310, 220, 220, 120, 160],
        }
      ],
      chart: {
        height: 350,
        type: "line",
        toolbar: {
          show: false
        },
        zoom:{
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
        enabledOnSeries: [1],
        formatter: function (value: string) {
          return "R$" + value
        }
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
        type: "datetime",
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
}


