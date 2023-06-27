import { Component, OnInit } from '@angular/core';


export interface Anotacoes {
  anotacao: string;
  checked: boolean;
  arquivada: boolean;
}

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrls: ['./card-anotacao.component.scss']
},)
export class CardAnotacaoComponent implements OnInit {

  anotacoes : any[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.anotacao();
  }

  anotacao(){
    this.anotacoes = [
      { anotacao: 'Comprar papel', checked: true },
      { anotacao: 'Estudar para o exame', checked: false },
      { anotacao: 'Marcar consulta médica', checked: false },
      { anotacao: 'Pagar contas de luz', checked: true },
      { anotacao: 'Ligar para o cliente X', checked: false },
      { anotacao: 'Fazer exercícios físicos', checked: true },
      { anotacao: 'Preparar jantar', checked: false },
      { anotacao: 'Comprar leite', checked: true },
      { anotacao: 'Conferir e-mails', checked: false },
      { anotacao: 'Enviar relatório', checked: false },
      { anotacao: 'Ler um livro', checked: true },
      { anotacao: 'Organizar armário', checked: false },
      { anotacao: 'Agendar viagem', checked: false },
      { anotacao: 'Resolver problema no computador', checked: true },
      { anotacao: 'Fazer compras', checked: false },
      { anotacao: 'Assistir a um filme', checked: true },
      { anotacao: 'Limpar a casa', checked: false },
      { anotacao: 'Fazer anotações', checked: false },
      { anotacao: 'Estudar um novo idioma', checked: true },
      { anotacao: 'Comprar presentes de aniversário', checked: false },
      { anotacao: 'Planejar férias', checked: false },
    ];
  }

}
