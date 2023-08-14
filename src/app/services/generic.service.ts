import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Helpers } from '@app/helpers/helpers';
import { ResultadoConsulta } from '../models/resultado-consulta.model';

@Injectable({
    providedIn: 'root'
})
export class GenericService<T> {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient, public router: Router) { }

    getItems(caminho: any) {
        return this.http.get(this.apiUrl + `${caminho}`, {headers: Helpers.getHttpHeaders()})
            .pipe(map(res => res));
    }

    listar(caminho: any): Observable<ResultadoConsulta<T>> {
        return this.http.get<ResultadoConsulta<T>>(this.apiUrl + `${caminho}`, { headers: Helpers.getHttpHeaders() })
            .pipe(map(res => res));
    }

    listarResultados(caminho: any, filtro: any): Observable<ResultadoConsulta<T>> {
        return this.http.get<ResultadoConsulta<T>>(this.apiUrl + `${caminho}` + this.prepararParametros(filtro),
            { headers: Helpers.getHttpHeaders() });
    }

    obterUnico(caminho: any, filtro: any): Observable<T> {
        return this.http.get<ResultadoConsulta<T>>(this.apiUrl + `${caminho}` + this.prepararParametros(filtro),
            { headers: Helpers.getHttpHeaders() })
            .pipe(
                map((result: any) => result.lista.shift())
            );
    }
/*
    postItems(caminho: any, objeto: any) {
        return this.http.post(this.apiUrl + `${caminho}`, Helpers.toJson(objeto), { headers: Helpers.getHttpHeaders() })
            .pipe(map(res => res));
    }

    postItemsSemToken(caminho: any, objeto: any) {
        return this.http.post(this.apiUrl + `${caminho}`, Helpers.toJson(objeto), { headers: Helpers.getHttpHeadersSemToken() })
            .pipe(map(res => res));
    }

    patchItems(caminho: any, objeto: any) {
        return this.http.patch(this.apiUrl + `${caminho}`, Helpers.toJson(objeto), { headers: Helpers.getHttpHeaders() })
          .pipe(map(res => res));
    } */

    postWithFile(caminho: string, formData: FormData) {
        const req = new HttpRequest('POST', this.apiUrl + caminho, formData, {headers: Helpers.getHttpHeadersFile()});
        return this.http.request(req).pipe(map(res => res));
    }

    getItemsObjeto(caminho: any, objeto: string) {
        return this.http.get(this.apiUrl + `${caminho}` + objeto, {headers: Helpers.getHttpHeaders()})
            .pipe(map(res => res));
    }

    private prepararParametros(filtro: any): string {
        let params = '?';

        if (filtro) {
            const paramsList = Object.keys(filtro)
                .map((param) => this.retornarParametrosComArray(param.toString(), filtro[param]))
                .join('&');

            params = params + paramsList;
        }

        return params;
    }

    private retornarParametrosComArray(nome: string, campo: any): string {
        let textoArray = '';
        let caracterLigacao = '';
        if (Array.isArray(campo)) {
            campo.forEach(valor => {
                textoArray += caracterLigacao + nome + '=' + valor;
                caracterLigacao = '&';
            });
            return textoArray;
        }
        return nome + '=' + encodeURIComponent(campo);
    }
}
