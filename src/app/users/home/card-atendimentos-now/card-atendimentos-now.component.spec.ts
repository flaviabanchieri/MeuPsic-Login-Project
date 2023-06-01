import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtendimentosNowComponent } from './card-atendimentos-now.component';

describe('CardAtendimentosNowComponent', () => {
  let component: CardAtendimentosNowComponent;
  let fixture: ComponentFixture<CardAtendimentosNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAtendimentosNowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAtendimentosNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
