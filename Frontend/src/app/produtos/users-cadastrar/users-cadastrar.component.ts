import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, Form, FormGroup, FormControl } from '@angular/forms';
import { User, ResponseUsers, Endereco } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-cadastrar',
  templateUrl: './users-cadastrar.component.html',
  styleUrls: ['./users-cadastrar.component.css']
})
export class UsersCadastrarComponent implements OnInit {

  responseUsers: ResponseUsers[];
  endereco: Endereco = new Endereco();
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  request: User = {
    _id: null,
    usuario: null,
    password: null,
    email: null,
    cpf: null,
    endereco: [],
    tipo: null,
    nome: null,
    sobrenome: null,
    statusUsuario: null,
    pedido:[],
  };

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
  }
  register(): void {
    if (this.formProduto.form.valid) {
      this.userService.createUser(this.request).subscribe();
      this.router.navigate(['/users/listar']);
      this.listarTodas();

    }
  }

}
