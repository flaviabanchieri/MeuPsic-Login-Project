import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgendaSemanaComponent } from './card-agenda-semana.component';

describe('CardAgendaSemanaComponent', () => {
  let component: CardAgendaSemanaComponent;
  let fixture: ComponentFixture<CardAgendaSemanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAgendaSemanaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAgendaSemanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
