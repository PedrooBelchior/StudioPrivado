import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResponseProdutos } from '../shared/produto.model';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.css']
})
export class VisualizarComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.id).subscribe(response => this.request = response);
  }

}
