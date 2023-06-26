import {Component, OnInit} from '@angular/core';
import {NgIf, NgFor} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

@Component({
  selector: 'app-card-agenda-semana',
  templateUrl: './card-agenda-semana.component.html',
  styleUrls: ['./card-agenda-semana.component.scss'],
  standalone: true,
  imports: [MatTableModule, NgIf, NgFor],
})
export class CardAgendaSemanaComponent implements OnInit {
  currentDate = new Date();
  currentYear : number | undefined;
  months : string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  days: string[] = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"];


  weeks: Array<any> = [
    [
      new Date(2019, 11, 1),
      new Date(2019, 11, 2),
      new Date(2019, 11, 3),
      new Date(2019, 11, 4),
      new Date(2019, 11, 5),
      new Date(2019, 11, 6),
      new Date(2019, 11, 7)],
    [
      new Date(2019, 11, 8),
      new Date(2019, 11, 9),
      new Date(2019, 11, 10),
      new Date(2019, 11, 11),
      new Date(2019, 11, 12),
      new Date(2019, 11, 13),
      new Date(2019, 11, 14),
    ],
    [
      new Date(2019, 11, 15),
      new Date(2019, 11, 16),
      new Date(2019, 11, 17),
      new Date(2019, 11, 18),
      new Date(2019, 11, 19),
      new Date(2019, 11, 20),
      new Date(2019, 11, 21),
    ],
    [
      new Date(2019, 11, 22),
      new Date(2019, 11, 23),
      new Date(2019, 11, 24),
      new Date(2019, 11, 25),
      new Date(2019, 11, 26),
      new Date(2019, 11, 27),
      new Date(2019, 11, 28),
    ],
    [
      new Date(2019, 11, 29),
      new Date(2019, 11, 30),
      new Date(2019, 11, 31),
    ]
  ]


  constructor() { }

  ngOnInit() {
  }

  getMonth() {
    return this.months[this.currentDate.getMonth()];
  }

  getFirstDay() {
    return this.days[this.currentDate.getDay()];
  }

  getYear() {
    return this.currentDate.getFullYear();
  }
}



