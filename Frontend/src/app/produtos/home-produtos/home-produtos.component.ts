import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ResponseProdutos, Imagem, Produto } from '../shared/produto.model';

@Component({
  selector: 'app-home',
  templateUrl: './home-produtos.component.html',
  styleUrls: ['./home-produtos.component.css']
})
export class HomeProdutosComponent implements OnInit {

  responseProdutos: ResponseProdutos[];
  imagem: Imagem = new Imagem();
  id: string;
  request: any;


  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }

}
