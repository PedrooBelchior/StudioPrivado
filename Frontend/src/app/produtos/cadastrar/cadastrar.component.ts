import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ProdutoService } from '../shared/produto.service';
import { Produto, ResponseProdutos, Faq, Imagem } from '../shared/produto.model';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  faq: Faq = new Faq();
  imagem: Imagem = new Imagem();
  itemSelected: any;
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  request: Produto = {
    _id: null,
    nome: null,
    marca: null,
    categoria: null,
    preco: null,
    descricao: null,
    palavraChave: null,
    quantidade: null,
    faq: [],
    imagem: [],
  };

  faqs(): void {
    this.request.faq.push(this.faq);
    console.log(this.request.faq);
    this.faq = new Faq();
  }

  imagens(): void {
    if (this.request.imagem.length !== 7) {
      this.request.imagem.push(this.imagem);
      console.log(this.request.imagem);
      this.imagem = new Imagem();
    } else {
      confirm('Limite máximo de imagens atingido, por favor apague uma, se quiser adicionar mais imagens');
    }
  }

  selecionarItem(itemSelecionado: any) {
    this.itemSelected = itemSelecionado;
  }


  cancelarFaq() {
    this.request.faq.splice(this.itemSelected, 1);
  }
  cancelarImagem() {
    this.request.imagem.splice(this.itemSelected, 1);
  }

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();

    this.loadScripts();
  }
  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/upload.js',
      '../../../assets/js/imgur.js'

    ];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }
  register(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.createProduto(this.request).subscribe();
      this.router.navigate(['/produtos/listar']);
      this.listarTodas();

    }
  }
}

