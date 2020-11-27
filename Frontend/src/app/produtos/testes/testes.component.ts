import { Component, OnInit } from '@angular/core';
import { ResponseProdutos } from '../shared/produto.model';
import { ProdutoService } from '../shared/produto.service';
import { User } from '../shared/user.model';
import { CestaService } from './shared/cesta.service';


@Component({
  selector: 'app-testes',
  templateUrl: './testes.component.html',
  styleUrls: ['./testes.component.css']
})
export class TestesComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  cliente: User;
  produtos = [];
  itens = [];
  totalCompra;
  produtoRequest: ResponseProdutos[];
  tamanho;

  constructor(private cestaService: CestaService,
    private produtoService: ProdutoService,) { }

  ngOnInit(): void {
    this.produtos=this.cestaService.getCesta();
  }

  removeCesta(index) {
    this.produtos=this.cestaService.removeCesta(index);
    window.alert('Item excluido com sucesso');
  }

  calculaCesta() {
    return this.cestaService.calculaCesta(); 
  }

  contaCesta(){
    return this.cestaService.contaCesta();
  }

  alteraCesta(index, qtd){
    // this.cestaService.alteraCesta(index, qtd);
  }

}