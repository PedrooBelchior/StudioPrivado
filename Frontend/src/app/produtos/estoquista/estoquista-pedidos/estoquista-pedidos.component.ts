import { Component, OnInit } from '@angular/core';
import { ResponseUsers, User, Pedido, ResponsePedidos } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-estoquista-pedidos',
  templateUrl: './estoquista-pedidos.component.html',
  styleUrls: ['./estoquista-pedidos.component.css']
})
export class EstoquistaPedidosComponent implements OnInit {

  responsePedidos: ResponsePedidos[];
  responseUsers: ResponseUsers[];
  // id: string;
  // request: any;
  // request: User = {
  //   _id: null,
  //   usuario: null,
  //   password: null,
  //   email: null,
  //   cpf: null,
  //   endereco: [],
  //   tipo: null,
  //   nome: null,
  //   sobrenome: null,
  //   statusUsuario: "Bloqueado",
  //   pedido: [],
  // };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarTodas();
    // this.RetornaHoraAtual();
    // this.RetornaDataAtual();
    console.log(this.RetornaHoraAtual());
    console.log(this.RetornaDataAtual());
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
     
     console.log(this.userService.getAllOrder().subscribe(response => this.responsePedidos = response));
     
  }



  RetornaDataAtual() {
    var dNow = new Date();
    var dataAtual = dNow.getDate() + "/" + (dNow.getMonth() + 1) + "/" + dNow.getFullYear();
    return dataAtual;

  }

  RetornaHoraAtual() {
    var hNow = new Date();
    var horaAtual = hNow.getHours() + ":" + hNow.getMinutes();
    return horaAtual;
  }


  remover(_id: string, nome: string, Users: any) {
    if (confirm(`Deseja excluir pedido ${nome}?`)) {
      this.userService.deleteUser(_id).subscribe();
      this.listarTodas();
      location.reload();
    }
  }

}
