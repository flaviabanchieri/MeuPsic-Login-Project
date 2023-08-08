/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Cadastro_clienteComponent } from './cadastro_cliente.component';

describe('Cadastro_clienteComponent', () => {
  let component: Cadastro_clienteComponent;
  let fixture: ComponentFixture<Cadastro_clienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cadastro_clienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cadastro_clienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
