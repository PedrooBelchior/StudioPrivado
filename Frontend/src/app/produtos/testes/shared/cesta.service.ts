import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CestaService {

  itens = [];

  totalCompra;

  tamanho;


  constructor(private http: HttpClient) {
    this.itens = (JSON.parse(localStorage.getItem('CestaDeProdutos')));
    /* this.itens = this.itens==null?[]:this.itens; same energy Y */

    if (this.itens == null) {
      this.itens = [];
    }

    console.log("---> Itens na Cesta",this.itens);
  }

  addCesta(responseProdutos) {
    console.log(responseProdutos)
    /*         this.itens.push(responseProdutos)
            console.log(responseProdutos) */
    const produto = responseProdutos;
    console.log(produto)
    let temNaLista = false;
    this.itens.forEach(item => {
      if (item == produto) {
        temNaLista = true;
      }
    })
    console.log(temNaLista);
    if (!temNaLista) {
      this.itens.push(produto);
    }
    localStorage.setItem('CestaDeProdutos', JSON.stringify(this.itens));
    console.log(this.itens);
  }

  public getCesta() {
    return this.itens;
  }

  public limpaCesta() {
    this.itens = [];
    return this.itens;
  }

  removeCesta(index) {
    this.itens.splice(index, 1);
    localStorage.setItem('produtos', JSON.stringify(this.itens));
    return this.itens;

  }

  calculaCesta() {
    this.totalCompra = this.itens.reduce((totalCompra, soma) => totalCompra + soma.preco, 0);
    console.log("---> Total Compra",this.totalCompra)
    return this.totalCompra;
   }

   contaCesta(){
     this.tamanho = this.itens.length;
     return this.tamanho;
   }

}