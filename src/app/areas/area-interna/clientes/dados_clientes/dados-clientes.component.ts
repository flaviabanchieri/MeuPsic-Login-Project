import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '@app/Interfaces/clientes-interface';
import clientesFake from '@app/fakeData/ClientesFake';
import { Helpers } from '@app/helpers/helpers';
import { GenericService } from '@app/services/generic.service';

@Component({
  selector: 'app-dados-clientes',
  templateUrl: './dados-clientes.component.html',
  styleUrls: ['./dados-clientes.component.css'],
})
export class DadosClientesComponent implements OnInit {
  clienteId: number;
  cliente: Cliente | undefined;
  constructor(
    private fb: FormBuilder,
    private genericService: GenericService<Cliente>,
    private _sanitizer: DomSanitizer,
    private rotaAtiva: ActivatedRoute,
    private router: Router
  ) {
    this.clienteId = Helpers.obterIdUrl('id', this.rotaAtiva);
  }

  ngOnInit() {
    this.obterClientes();
    console.log(this.cliente);
    console.log(this.clienteId)
  }

  obterClientes() {
    var clientes = clientesFake.filter((c) => (c.id = this.clienteId));
  }
}
