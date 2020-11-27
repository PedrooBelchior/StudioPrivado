import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../shared/produto.service';
import { UserService } from '../shared/user.service';
import { ResponseUsers, User } from '../shared/user.model';
import { ResponseProdutos } from '../shared/produto.model';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listar',
  templateUrl: './users-listar.component.html',
  styleUrls: ['./users-listar.component.css']
})
export class UsersListarComponent implements OnInit {

  responseUsers: ResponseUsers[];
  id: string;
  // request: any;
  request: User = {
    _id: null,
    usuario: null,
    password: null,
    email: null,
    cpf: null,
    endereco:[],
    tipo: null,
    nome: null,
    sobrenome: null,
    statusUsuario: "Bloqueado",
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
  }

  remover(_id: string, nome: string, Users: any) {
    if (confirm(`Deseja excluir o usuário ${nome}?`)) {
      this.userService.deleteUser(_id).subscribe();
      this.listarTodas();
      location.reload();
    }
  }


  // remover(_id: string, nome: string, Users: any) {
  //   if (confirm(`Deseja bloquear o usuário ${nome}?`)) {
  //     console.log(Users.email);
      
  //     Users.statusUsuario = "Bloqueado";
  //     this.userService.updateUser(_id, Users).subscribe();
  //     this.router.navigate(['/users/listar']);
  //     // this.listarTodas();
  //   }
  // }
}
