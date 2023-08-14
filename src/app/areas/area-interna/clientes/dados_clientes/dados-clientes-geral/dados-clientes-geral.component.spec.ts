/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DadosClientesGeralComponent } from './dados-clientes-geral.component';

describe('DadosClientesGeralComponent', () => {
  let component: DadosClientesGeralComponent;
  let fixture: ComponentFixture<DadosClientesGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosClientesGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosClientesGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
