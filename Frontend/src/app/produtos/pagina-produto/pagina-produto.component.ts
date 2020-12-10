import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseProdutos } from '../shared/produto.model';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CestaService } from './../testes/shared/cesta.service';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.css']
})
export class PaginaProdutoComponent implements OnInit {

  responseProdutos: ResponseProdutos[];
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private cestaService: CestaService,
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router,
    private header: HeaderComponent,
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.id).subscribe(response => this.request = response);
    console.log(this.id);
    
  }

  addCesta(){
    this.cestaService.addCesta(this.request);
    window.alert('O produto foi adicionado a cesta!!');
    this.header.alteraQTD();
    // console.log(this.id);
    this.router.navigate(['/home']);
  }

}
