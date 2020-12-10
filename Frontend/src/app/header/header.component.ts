import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  itens = [];
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  logado() {
    const token = window.localStorage.getItem('token');
    if (!token) {
      return false;
    }
    return true;
  }

  verificaAdmin() {
    const tipo = window.localStorage.getItem('tipo');
    if (tipo != 'Administrador') {
      return false;
    }
    return true;
  }

  verificaEstoquista() {
    const tipo = window.localStorage.getItem('tipo');
    if (tipo != 'Estoquista') {
      return false;
    }
    return true;
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

  logout(): void {
    if (confirm(`Deseja realemente sair?`)) {
      // this.router.navigate(['/home']);
      localStorage.clear();
      location.reload();
      this.quantidadeCarrinho();
      this.alteraQTD();
      this.router.navigate(['/home']);
      
    }
  }

  acessarUsuario(): void {
    this.router.navigate(['/minha-conta/']);
  }



}
