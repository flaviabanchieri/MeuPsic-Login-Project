import { Cliente } from './../../../../Interfaces/clientes-interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import clientesFake from '@app/fakeData/ClientesFake';


@Component({
  selector: 'app-painel_clientes',
  templateUrl: './painel-clientes.component.html',
  styleUrls: ['./painel-clientes.component.scss']
})
export class PainelClientesComponent implements OnInit {

  clientes = new Array<Cliente>();
  filtrar = false;
  constructor(private router: Router) { }

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
        cliente.cor = this.obterCores()
      } else {
        cliente.inicial = 'S/N';
      }

    });
  }

  obterCores(){
    var lista = ['circle-blue', 'circle-purple', 'circle-green', 'circle-orange'];
    const circle = lista[Math.floor(Math.random() * lista.length)];
    return circle
  }

  abrirFiltro(){
    this.filtrar = !this.filtrar
  }

  abrirCliente(cliente: any){
    this.router.navigate([`/cliente/${cliente.id}`])
  }

  cadastrarCliente(){
    this.router.navigate([`/cliente/${0}`])
  }

}
