
import { Component } from '@angular/core';


export interface PeriodicElement {
  dia: string;
  data: number;
  hora: string;
  agenda: string;
  transparent?: boolean; // Adiciona a propriedade "transparent" opcional ao objeto;
  tag: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dia: 'Seg', data: 1, hora: '14:30', agenda: 'Ligar para Maria', tag: 'blue' },
  { dia: 'Ter', data: 2, hora: '15:20', agenda: 'Ir no mercado comprar presentes', tag: 'gray' },
  { dia: 'Qua', data: 3, hora: '09:30', agenda: 'Ligar para João', tag: 'blue' },
  { dia: 'Qua', data: 3, hora: '20:00', agenda: 'Ligar para Pedro', tag: 'blue' },
  { dia: 'Sex', data: 5, hora: '14:30', agenda: 'Aniversário de João', tag: 'green' },
  { dia: 'Sab', data: 6, hora: '14:30', agenda: 'Carbon', tag: 'purple' },
  { dia: 'Dom', data: 7, hora: '14:30', agenda: 'Nitrogen', tag: 'blue' },
  { dia: 'Seg', data: 8, hora: '14:30', agenda: 'Oxygen', tag: 'purple' },
  { dia: 'Ter', data: 9, hora: '14:30', agenda: 'Fluorine' , tag: 'blue'},
  { dia: 'Ter', data: 9, hora: '14:30', agenda: 'Neon' , tag: 'purple'},
];

@Component({
  selector: 'app-card-agenda-semana',
  templateUrl: './card-agenda-semana.component.html',
  styleUrls: ['./card-agenda-semana.component.scss'],
})

export class CardAgendaSemanaComponent {
  displayedColumns: string[] = ['data', 'agenda'];
  dataSource = ELEMENT_DATA;
  duplicatedDates: Set<number> = new Set();
  mostrar = false;

  populateTableData() {
    this.dataSource = this.dataSource.map(event => {
      if (this.duplicatedDates.has(event.data)) {
        event.transparent = true; // Adiciona a propriedade "transparent" ao objeto do evento
      } else {
        this.duplicatedDates.add(event.data);
      }
      return event;
    });
  }

  ngOnInit() {
    this.populateTableData();
  }
}
