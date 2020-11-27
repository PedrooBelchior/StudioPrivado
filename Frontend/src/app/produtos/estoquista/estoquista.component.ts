import { Component, OnInit } from '@angular/core';
import { ResponseProdutos } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';

@Component({
  selector: 'app-estoquista',
  templateUrl: './estoquista.component.html',
  styleUrls: ['./estoquista.component.css']
})
export class EstoquistaComponent implements OnInit {

  responseProdutos: ResponseProdutos[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }

}
