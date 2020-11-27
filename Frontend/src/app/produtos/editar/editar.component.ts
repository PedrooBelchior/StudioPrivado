import { Component, OnInit, ViewChild } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ResponseProdutos, Faq, Imagem, Produto } from '../shared/produto.model';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['../cadastrar/cadastrar.component.css']
})
export class EditarComponent implements OnInit {
  responseProdutos: ResponseProdutos[];
  faq: Faq = new Faq();
  imagem: Imagem = new Imagem();
  itemSelected: any;
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();
    this.loadScripts();
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtoService.getProduto(this.id).subscribe(response => this.request = response);
  }

  update(): void {
    if (this.formProduto.form.valid) {
      this.produtoService.updateProduto(this.id, this.request).subscribe();
      this.router.navigate(['/produtos']);
      this.listarTodas();
    }
  }

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

  listarTodas() {
    this.produtoService.getProdutos().subscribe(response => this.responseProdutos = response);
  }

  loadScripts() {
    const dynamicScripts = [
      '../../../assets/js/upload.js',
      '../../../assets/js/imgur.js'

    ];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    }
  }
}
