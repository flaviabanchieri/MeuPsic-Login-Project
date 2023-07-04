import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-anotacao',
  templateUrl: './card-anotacao.component.html',
  styleUrls: ['./card-anotacao.component.scss']
})
export class CardAnotacaoComponent implements OnInit {


  anotacoes = [
    { id: 1, check: true, arquivado: false, anotacao: 'Comprar água' },
    { id: 2, check: false, arquivado: false, anotacao: 'Agendar consulta com paciente X' },
    { id: 3, check: false, arquivado: false, anotacao: 'Preparar material para a próxima sessão' },
    { id: 4, check: true, arquivado: false, anotacao: 'Enviar lembrete de consulta para paciente Y' },
    { id: 5, check: false, arquivado: false, anotacao: 'Revisar anotações da última sessão' },
    { id: 6, check: true, arquivado: false, anotacao: 'Participar de reunião com a equipe' },
    { id: 7, check: false, arquivado: false, anotacao: 'Ligar para fornecedor de material de escritório' },
    { id: 8, check: true, arquivado: false, anotacao: 'Organizar agenda da semana seguinte' },
    { id: 9, check: false, arquivado: false, anotacao: 'Enviar relatório de atendimentos para a diretoria' },
    { id: 10, check: true, arquivado: false, anotacao: 'Receber pagamento do paciente Z' },
    { id: 11, check: true, arquivado: false, anotacao: 'Atualizar prontuário do paciente X' }
  ];

  anotacoesMostradas = this.anotacoes.filter(x => x.arquivado == false)



  constructor() { }

  checkAnotacao(id: number){
    let anotacao = this.anotacoes.filter(x => x.id == id)

    if (anotacao[0].check) {
      anotacao[0].check = false
    } else {
      anotacao[0].check = true
    }

  }

  arquivar(id: number){
    let notas = this.anotacoes.filter(x => x.id == id);
    notas[0].arquivado = true;

  }

  ngOnInit(): void {
  }

}
