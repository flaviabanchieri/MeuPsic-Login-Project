import { Cliente } from './../../../../Interfaces/clientes-interface';
import { Component, OnInit } from '@angular/core';
import clientesFake from '@app/fakeData/ClientesFake';


@Component({
  selector: 'app-painel_clientes',
  templateUrl: './painel-clientes.component.html',
  styleUrls: ['./painel-clientes.component.scss']
})
export class PainelClientesComponent implements OnInit {

  clientes = new Array<Cliente>();
  filtrar = false;
  constructor() { }

  ngOnInit() {
    this.obterClientes()
  }

  obterClientes(){
    this.clientes = clientesFake;
    this.clientes.forEach(cliente => {
      if (cliente.nome) {
        const nomeSobrenome = cliente.nome.split(' '); // Divide o nome em partes separadas por espaço
        const primeiraLetraNome = nomeSobrenome[0].charAt(0);
        const primeiraLetraSobrenome = nomeSobrenome[1] ? nomeSobrenome[1].charAt(0) : '';
        cliente.inicial = primeiraLetraNome + primeiraLetraSobrenome;
      } else {
        cliente.inicial = 'S/N';
      }

    });
  }

  abrirFiltro(){
    this.filtrar = !this.filtrar
  }

  abrirCliente(nome: any){
    console.log('cliente aberto:' + nome.nome + nome.contato)
  }

}
