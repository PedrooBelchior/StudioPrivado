import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ResponseProdutos } from '../shared/produto.model';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  responseProdutos: ResponseProdutos[];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }

  remover(_id: string, nome: string) {
    if (confirm(`Deseja remover o produto ${nome}?`)) {
      this.produtoService.deleteProduto(_id).subscribe();
      this.listarTodas();
      location.reload();
    }
  }
  
  

}
