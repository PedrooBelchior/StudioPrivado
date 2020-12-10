import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseUsers, Endereco, User, Pedido } from '../../../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-detalhe-pedido-account',
  templateUrl: './detalhe-pedido-account.component.html',
  styleUrls: ['./detalhe-pedido-account.component.css']
})
export class DetalhePedidoAccountComponent implements OnInit {
  responseUsers: ResponseUsers[];
  endereco: Endereco = new Endereco();
  pedido: Pedido = new Pedido();
  itemSelected: any;

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;
  id: string;
  request: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.listarTodas();
    this.id = this.route.snapshot.paramMap.get('id');
    //this.request apresentando erro, mas funcionando perfeitamente.
    this.userService.getUser(this.id).subscribe(response => this.request = response);
  }

  update(): void {
    if (this.formProduto.form.valid) {
      this.userService.updateUser(this.id, this.request).subscribe();
      this.router.navigate(['/home']);
      this.listarTodas();
    }
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
    
  }
  
  remover(_id: string, Users: any) {
    if (confirm(`Deseja excluir o pedido ${_id}?`)) {
      this.userService.deleteUser(_id).subscribe();
      this.listarTodas();
      location.reload();
    }
  }


  enderecos(): void {
    this.request.endereco.push(this.endereco);
    console.log(this.request.endereco);
    this.endereco = new Endereco();
  }
  selecionarItem(itemSelecionado: any) {
    this.itemSelected = itemSelecionado;
  }

  cancelarEndereco() {
    this.request.pedidos.splice(this.itemSelected, 1);
  }

  
}
