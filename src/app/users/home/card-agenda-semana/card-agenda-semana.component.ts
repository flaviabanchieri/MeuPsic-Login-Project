
import { Component } from '@angular/core';


export interface PeriodicElement {
  dia: string;
  data: number;
  agenda: string;
  transparent?: boolean; // Adiciona a propriedade "transparent" opcional ao objeto
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dia: 'Seg', data: 1, agenda: 'Hydrogen' },
  { dia: 'Ter', data: 2, agenda: 'Helium' },
  { dia: 'Qua', data: 3, agenda: 'Lithium' },
  { dia: 'Qui', data: 4, agenda: 'Beryllium' },
  { dia: 'Sex', data: 5, agenda: 'Boron' },
  { dia: 'Sab', data: 6, agenda: 'Carbon' },
  { dia: 'Dom', data: 7, agenda: 'Nitrogen' },
  { dia: 'Seg', data: 8, agenda: 'Oxygen' },
  { dia: 'Ter', data: 9, agenda: 'Fluorine' },
  { dia: 'Ter', data: 9, agenda: 'Neon' },
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
