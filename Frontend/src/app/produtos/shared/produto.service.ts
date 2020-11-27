import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto, ResponseProdutos, ResponseProduto } from './produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  private readonly API = 'http://localhost:3000/produtos';

  getProdutos() {
    return this.http.get<ResponseProdutos[]>(this.API);
  }

  createProduto(request: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.API, request);
  }

  getProduto(_id: string): Observable<ResponseProduto> {
    const URL = `${this.API}/${_id}`;

    return this.http.get<ResponseProduto>(URL);
  }

  updateProduto(_id: string, request: Produto): Observable<Produto> {
    const URL = `${this.API}/${_id}`;
    return this.http.put<Produto>(URL, request);
  }

  deleteProduto(_id: any): Observable<any> {
    const URL = `${this.API}/${_id}`;

    return this.http.delete<any>(URL);
  }

}
