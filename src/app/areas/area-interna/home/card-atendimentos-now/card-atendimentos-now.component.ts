import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-atendimentos-now',
  templateUrl: './card-atendimentos-now.component.html',
  styleUrls: ['./card-atendimentos-now.component.scss']
})
export class CardAtendimentosNowComponent implements OnInit {

  clientes = [
    { id: 1, nome: 'João Silva', data: "2023-06-08 15:01:01.000", presencial: true, check: false, imagem: 'https://br.freepik.com/fotos/pessoa-rosto' },
    { id: 2, nome: 'Maria Santos', data: "2023-07-14 19:01:01.000", presencial: true, check: false, imagem: 'https://br.freepik.com/fotos-premium/pessoas-mulheres-negocios-e-conceito-de-retrato-rosto-de-jovem-sorridente-feliz_35825872.htm' },
    { id: 3, nome: 'Pedro Almeida', data: "2023-06-08 13:01:01.000", presencial: false, check: false, imagem: 'https://imasters.com.br/noticia/programador-usa-ia-para-criar-rostos-de-pessoas-que-nao-existem' },
    { id: 4, nome: 'Ana Pereira', data: "2023-07-14 15:15:01.000", presencial: true, check: false, imagem: 'https://br.freepik.com/fotos-premium/foto-de-rosto-de-mulher-jovem-latina-feliz-com-fundo-de-expressao-de-sorriso-com-espaco-de-copia-retrato-de-rosto-de-pessoas-reais-etnicas-da-america-do-sul-boliviana_16104571.htm' },
    { id: 5, nome: 'Mariana Oliveira', data: "2023-05-08 15:01:01.000", presencial: true, check: false, imagem: 'https://noticias.r7.com/tecnologia-e-ciencia/fotos/site-apavorante-cria-rostos-de-pessoas-que-nunca-existiram-21022019' },
    { id: 6, nome: 'Lucas Martins', data: "2023-07-14 18:01:01.000", presencial: false, check: false, imagem: 'https://super.abril.com.br/tecnologia/site-cria-rostos-perfeitamente-reais-usando-inteligencia-artificial' },
    { id: 7, nome: 'Carolina Lima', data: "2023-07-08 12:01:01.000", presencial: true, check: false, imagem: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-04.png' },
    { id: 8, nome: 'Rafaela Ferreira', data: "2023-05-08 11:01:01.000", presencial: false, check: false, imagem: 'https://noticias.r7.com/tecnologia-e-ciencia/fotos/site-apavorante-cria-rostos-de-pessoas-que-nunca-existiram-21022019' },
    { id: 9, nome: 'Gustavo Sousa', data: "2023-07-14 20:01:01.000", presencial: true, check: false, imagem: 'https://super.abril.com.br/wp-content/uploads/2019/02/tecnologia-ia-rostos-08.png' },
    { id: 10, nome: 'Juliana Costa', data: "2023-07-08 13:01:01.000", presencial: false, check: false, imagem: 'https://br.freepik.com/fotos/rostos-pessoas' },
    { id: 11, nome: 'Fernanda Rodrigues', data: "2023-07-14 12:01:01.000", presencial: false, check: false, imagem: 'https://unsplash.com/pt-br/fotografias/uma-mulher-com-um-sorriso-no-rosto-lh9_ATRPKJQ' }
  ];



  horaAtual = new Date().getTime();
  clienteAgora: any;
  clienteDepois = new Array<any>();
  primeirosClientesHoje = new Array<any>()

  constructor() { }

  ngOnInit(): void {
    this.filtrarClientes()
    console.log(this.clienteAgora)
    console.log(this.clienteDepois)
    console.log(this.primeirosClientesHoje)
  }

  presencial(bool: boolean){
    if(bool == true){
      return "Presencial"
    } else {
      return "Virtual"
    }
  }
  filtrarClientes() {
    let hoje = new Date();
    let clientesHoje = this.clientes.filter(cliente => {
      const dataCliente = new Date(cliente.data);
      return (
        dataCliente.getFullYear() === hoje.getFullYear() &&
        dataCliente.getMonth() === hoje.getMonth() &&
        dataCliente.getDate() === hoje.getDate()
      );
    });
    this.primeirosClientesHoje = clientesHoje.filter(cliente => {
      const horaCliente = new Date(cliente.data).getTime();
      return horaCliente > this.horaAtual;
    }).slice(0, 3).sort((a, b) => {
      const horaA = new Date(a.data).getTime();
      const horaB = new Date(b.data).getTime();
      return horaA - horaB;
    });
    this.clienteAgora = this.primeirosClientesHoje[0]
    this.clienteDepois = this.primeirosClientesHoje.splice(0,1)
  }


}



