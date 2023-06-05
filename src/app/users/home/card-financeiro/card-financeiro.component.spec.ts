import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFinanceiroComponent } from './card-financeiro.component';

describe('CardFinanceiroComponent', () => {
  let component: CardFinanceiroComponent;
  let fixture: ComponentFixture<CardFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardFinanceiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
