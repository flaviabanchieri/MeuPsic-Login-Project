import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAnotacaoComponent } from './card-anotacao.component';

describe('CardAnotacaoComponent', () => {
  let component: CardAnotacaoComponent;
  let fixture: ComponentFixture<CardAnotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardAnotacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAnotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
