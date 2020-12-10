import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',

})
export class MinhaContaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  editarUsuario():void{
    const id = window.localStorage.getItem('id');
    this.router.navigate(['/editar-usuario/',`${id}`]);
  }

  meusPedidos():void{
    const id = window.localStorage.getItem('id');
    this.router.navigate(['/meus-pedidos/',`${id}`]);
  }
}
