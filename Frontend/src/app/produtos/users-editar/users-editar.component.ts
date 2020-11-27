import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseUsers, User } from '../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users-editar',
  templateUrl: './users-editar.component.html',
  styleUrls: ['./users-editar.component.css']
})
export class UsersEditarComponent implements OnInit {

  responseUsers: ResponseUsers[];

  itemSelected: any;
  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  id: string;
  request: any;

  // request: User = {
  //   _id: null,
  //   usuario: null,
  //   senha: null,
  //   tipo: null,
  //   nome: null,
  //   statusUsuario: null,
  // }
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
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
      this.router.navigate(['/users/listar']);
      this.listarTodas();
    }
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
  }

}
