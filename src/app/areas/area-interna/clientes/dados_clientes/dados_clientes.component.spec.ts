/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dados_clientesComponent } from './dados_clientes.component';

describe('Dados_clientesComponent', () => {
  let component: Dados_clientesComponent;
  let fixture: ComponentFixture<Dados_clientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dados_clientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dados_clientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
