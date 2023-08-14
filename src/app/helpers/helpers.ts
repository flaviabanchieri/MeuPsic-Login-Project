import { HttpHeaders } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
import { ActivatedRoute } from '@angular/router';

export class Helpers {
  static formatarData(data: any): any {
    if (data) {
      return data.split('/').reverse().join('-');
    }
    return data;
  }

  static formatarValorParaReal(valor: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  }

  static colocarMascaraCpfCnpj(cpfCnpj: string) {
    if (cpfCnpj) {
      cpfCnpj = cpfCnpj.toString();
      cpfCnpj = cpfCnpj.replace(/\D/g, '');

      switch (cpfCnpj.length) {
        case 4:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})/, ' $1.$2');
          break;
        case 5:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})/, ' $1.$2');
          break;
        case 6:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})/, ' $1.$2');
          break;
        case 7:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})(\d{3})/, ' $1.$2.$3');
          break;
        case 8:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})(\d{3})/, ' $1.$2.$3');
          break;
        case 9:
          cpfCnpj = cpfCnpj.replace(/(\d+)(\d{3})(\d{3})/, ' $1.$2.$3');
          break;
        case 10:
          cpfCnpj = cpfCnpj.replace(
            /(\d+)(\d{3})(\d{3})(\d{1})/,
            ' $1.$2.$3-$4'
          );
          break;
        case 11:
          cpfCnpj = cpfCnpj.replace(
            /(\d+)(\d{3})(\d{3})(\d{2})/,
            ' $1.$2.$3-$4'
          );
          break;
        case 12:
          cpfCnpj = cpfCnpj.replace(
            /(\d+)(\d{3})(\d{3})(\d{4})/,
            ' $1.$2.$3/$4'
          );
          break;
        case 13:
          cpfCnpj = cpfCnpj.replace(
            /(\d+)(\d{3})(\d{3})(\d{4})(\d{2})/,
            ' $1.$2.$3/$4-$5'
          );
          break;
        case 14:
          cpfCnpj = cpfCnpj.replace(
            /(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/,
            ' $1.$2.$3/$4-$5'
          );
          break;
      }
    }
    return cpfCnpj;
  }

  static getHttpHeaders(): HttpHeaders {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));
  }

  static getHttpHeadersSemToken(): HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

  static getHttpHeadersFile(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token')
    );
  }


  static regexEmail(): RegExp {
    return /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
  }


  static obterIdUrl(nomeIdentificador: string, rota: ActivatedRoute): number {
    if (nomeIdentificador.length > 0 && rota) {
      return Number(rota.snapshot.paramMap.get(nomeIdentificador));
    }
    return 0;
  }

  static obterParametroUrl(
    nomeIdentificador: string,
    rota: ActivatedRoute
  ): string {
    if (nomeIdentificador.length > 0 && rota) {
      return String(rota.snapshot.paramMap.get(nomeIdentificador));
    }
    return '';
  }

  static soNumeros(evt: { which: any; keyCode: any; ctrlKey: any; cancelBubble: boolean; returnValue: boolean; preventDefault: () => void; }) {
    const charCode = evt.which ? evt.which : evt.keyCode;
    const controlKey = evt.ctrlKey ? evt.ctrlKey : evt.ctrlKey;
    if (charCode > 31 && (charCode < 48 || charCode > 57 || controlKey)) {
      evt.cancelBubble = true;
      evt.returnValue = false;
      evt.preventDefault();
    }
  }

  static validaSeNumeral(valor: string): boolean {
    let numbers = /^[0-9]+$/;

    if (!valor.match(numbers)) {
      return false;
    }

    return true;
  }

  static insereMascaraTelefone(telefone: { toString: () => any; }) {
    let telefoneComMascara = telefone.toString();

    telefoneComMascara = telefoneComMascara
      .replace(/[^\d]/g, '')
      .replace(/^(\d\d)(\d)/, '($1) $2');

    if (telefoneComMascara.length < 11) {
      telefoneComMascara = telefoneComMascara.replace(/(\d{4})(\d)/, '$1-$2');
    } else {
      telefoneComMascara = telefoneComMascara.replace(/(\d{5})(\d)/, '$1-$2');
    }

    return telefoneComMascara;
  }

  static retonarPaginacao(pageEvent: PageEvent | null): any {
    if (pageEvent === null) {
      pageEvent = new PageEvent();
      pageEvent.pageIndex = 1;
      pageEvent.pageSize = 10;
    } else {
      pageEvent.pageIndex = pageEvent.pageIndex + 1;
      pageEvent.pageSize = 10;
    }

    return { pagina: pageEvent.pageIndex, tamanhoDaPagina: pageEvent.pageSize };
  }

  static retirarCaracterEspecial(texto: string): string {
    if (texto) {
      return texto.replace(/[^a-zA-Z 0-9]/g, '');
    }

    return texto;
  }

  static isNullOrEmpty(valor: string): boolean {
    if (valor == '' || valor == null || valor == undefined) {
      return true;
    }

    return false;
  }

  static isNullOrZero(valor: number): boolean {
    if (valor == 0 || valor == null || valor == undefined) {
      return true;
    }

    return false;
  }

  static newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }



}
