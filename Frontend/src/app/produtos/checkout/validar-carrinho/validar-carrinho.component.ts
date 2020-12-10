import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CestaService } from '../../testes/shared/cesta.service';

@Component({
  selector: 'app-validar-carrinho',
  templateUrl: './validar-carrinho.component.html',
  styleUrls: ['./validar-carrinho.component.css']
})
export class ValidarCarrinhoComponent implements OnInit {
  produtos = [];
  itens = [];
  constructor(private cestaService: CestaService,
    public router: Router) { }

  ngOnInit(): void {
    this.produtos = this.cestaService.getCesta();
    this.quantidadeCarrinho();
    this.alteraQTD();
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

  calculaCesta() {
    return this.cestaService.calculaCesta();
  }

  contaCesta() {
    return this.cestaService.contaCesta();
  }
}
