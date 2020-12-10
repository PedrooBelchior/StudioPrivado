import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CestaService {

  itens = [];

  totalCompra: number;
  soma: number;

  tamanho;


  constructor(private http: HttpClient) {
    this.itens = (JSON.parse(localStorage.getItem('CestaDeProdutos')));
    /* this.itens = this.itens==null?[]:this.itens; same energy Y */

    if (this.itens == null) {
      this.itens = [];
    }

    console.log("---> Itens na Cesta", this.itens);
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
    localStorage.setItem('CestaDeProdutos', JSON.stringify(this.itens));

    localStorage.removeItem('produto'+(index+1)+ "");
    localStorage.removeItem('qtd'+(index+1)+ "");
    localStorage.removeItem('valor'+(index+1)+ "");
    this.ExibeCarrinho();
    // parseFloat(localStorage.getItem("valor" + i));
    return this.itens;

  }

  ExibeCarrinho() {
    var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
    var i = 0;     // variável que irá percorrer as posições
    var valor = 0; // variável que irá receber o preço do produto convertido em Float.

    for (i = 1; i <= 99; i++) // verifica até 99 produtos registrados na localStorage
    {
      var prod = localStorage.getItem("produto" + i + ""); // verifica se há recheio nesta posição. 
      if (prod != null) {
        // exibe os dados da lista dentro da div itens
        // document.getElementById("itens").innerHTML += localStorage.getItem("qtd" + i) + " x ";
        // document.getElementById("itens").innerHTML += localStorage.getItem("produto" + i);
        // document.getElementById("itens").innerHTML += " ";
        // document.getElementById("itens").innerHTML += "R$: " + localStorage.getItem("valor" + i) + "<hr>";

        // calcula o total dos recheios
        valor = parseFloat(localStorage.getItem("valor" + i)); // valor convertido com o parseFloat()
        total = (total + valor); // arredonda para 2 casas decimais com o .toFixed(2)
      }
    }
    // exibe o total dos recheios
    document.getElementById("total").innerHTML = total.toFixed(2);
  }

  calculaCesta() {
    this.totalCompra = this.itens.reduce((totalCompra, soma) => totalCompra + soma.preco, 0);
    localStorage.setItem('TotalCompra', JSON.stringify(this.totalCompra));
    // console.log("---> Total Compra", this.totalCompra)
    return this.totalCompra;
  }

  contaCesta() {
    this.tamanho = this.itens.length;
    return this.tamanho;
  }

}