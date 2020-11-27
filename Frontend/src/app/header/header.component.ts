import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
  logout(): void {
    if (confirm(`Deseja realemente sair?`)){
    localStorage.clear();
    location.reload();
    }
  }
  acessarUsuario():void{
    const id = window.localStorage.getItem('id');
    this.router.navigate(['/editar-usuario/',`${id}`]);
    // console.log(id);
    
  }

}
