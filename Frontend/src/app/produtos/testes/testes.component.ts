import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseProdutos, Produto } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';
import { ResponseUser, User } from '../shared/user.model';
import { CestaService } from './shared/cesta.service';


@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {
  public qtProduto: number;
  responseUser: ResponseUser[];
  cliente: User;
  produtos = [];
  itens = [];
  totalCompra;
  produtoRequest: ResponseProdutos[];
  tamanho;
  total: number;
  precoProduto: Produto["preco"];

  constructor(private cestaService: CestaService,
    public router: Router) { }

  ngOnInit(): void {
    this.produtos = this.cestaService.getCesta();
    this.quantidadeCarrinho();
    this.alteraQTD();
    this.ExibeCarrinho();
  }

  checagemLogin() {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }
  finalizarCompra() {
    if (this.checagemLogin() == false) {
      this.router.navigate(['/acesso-usuario']);
    } else {
      const id = window.localStorage.getItem('id');
      this.router.navigate(['/checkout/', id]);
    }
  }
  quantidadeCarrinho() {
    this.itens = (JSON.parse(localStorage.getItem('CestaDeProdutos')));
    return this.itens.length
  }

  alteraQTD() {
    this.quantidadeCarrinho();
    const valorCarrinho = document.getElementById("valorCarrinho");
    valorCarrinho.innerHTML = "" + this.itens.length + "";
  }
  removeCesta(index) {
    this.produtos = this.cestaService.removeCesta(index);
    this.quantidadeCarrinho();
    this.alteraQTD();
    window.alert('Item excluido com sucesso');
  }

  calculaCesta() {
    this.totalCompra = this.itens.reduce((totalCompra, soma) => totalCompra + soma.preco, 0);
    this.totalCompra = this.total
    // this.totalCompra = this.itens.reduce((totalCompra, soma) => totalCompra + this.precoProduto, 0);
    localStorage.setItem('TotalCompra', JSON.stringify(this.totalCompra));
    // console.log("---> Total Compra", this.totalCompra)
    return this.totalCompra;
    // return this.cestaService.calculaCesta();
  }

  contaCesta() {
    return this.cestaService.contaCesta();
  }

  AddCarrinho(produto, qtd, valor, posicao) {

    localStorage.setItem("produto" + posicao, produto);
    localStorage.setItem("qtd" + posicao, qtd);
    valor = valor * qtd;
    localStorage.setItem("valor" + posicao, valor);
    this.ExibeCarrinho();
    return valor
    // alert("Produto adicionado ao carrinho!");s
  }
  ExibeCarrinho() {
    var total = 0; // variável que retorna o total dos produtos que estão na LocalStorage.
    var i = 1;     // variável que irá percorrer as posições
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
  // quantidadeMudou(qtd, preco) {
  //   let variavel1:number, variavel2:number;
  //   variavel1 = preco;
  //   variavel2 = qtd;
  //   this.total = variavel1 * variavel2;
  //   console.log(this.total);
  //   this.precoProduto = this.total;
  //   console.log("--->",this.precoProduto);
  //   console.log(this.qtProduto);

  //   return this.total

  // }
  // document.getElementById("precoUnitario").innerHTML = ;
  //  ;
  // let qtProduto = document.getElementById("qtProduto").textContent;
  // precoUnitario = precoUnitario*this.qtProduto;

  // return qtProduto;
  // moneyTextToFloat(text) {
  //   var cleanText = text.replace("R$ ", "").replace(",", ".");
  //   return parseFloat(cleanText);
  // }

  // floatToMoneyText(value) {
  //   var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
  //   text = "R$ " + text;
  //   return text.substr(0, text.length - 2) + "," + text.substr(-2);
  // }


  // //Ler o Total
  // writeTotal(value) {
  //   var total = document.getElementById("total");
  //   total.innerHTML = this.floatToMoneyText(value);
  // }

  // calculateTotalProducts() {
  //   var produtos = document.getElementsByClassName("produto");
  //   var totalProdutos = 0;
  //   for (var pos = 0; pos < produtos.length; pos++) {
  //     var priceElements = produtos[pos].getElementsByClassName("price");
  //     var priceText = priceElements[0].innerHTML;
  //     var price = this.moneyTextToFloat(priceText);
  //     var qtyElements = produtos[pos].getElementsByClassName("quantity");
  //     var qtyText = qtyElements[0].textContent;
  //     var quantity = this.moneyTextToFloat(qtyText);
  //     var subtotal = quantity * price;
  //     totalProdutos += subtotal;
  //   }
  //   return totalProdutos;
  // }

  // quantidadeMudou(){
  //   this.writeTotal(this.calculateTotalProducts());
  // }

  // onDocumentLoad(){
  //   var textEdits = document.getElementsByClassName("quantity");
  //   for(var i =0; i< textEdits.length; i++){
  //     textEdits[i].onChange =this.quantidadeMudou;
  //   }
  // }

  // alteraCesta(index, qtd){
  //   this.cestaService.alteraCesta(index, qtd);
  // }

}