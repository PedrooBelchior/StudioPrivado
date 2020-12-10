import { Router } from '@angular/router';
import { AccountService } from './../shared/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    email: '',
    password: ''
  };


  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    try {
      const result = await this.accountService.login(this.login);
      const resultToken = await this.accountService.getUser();
      const resultTipo = await this.accountService.getUserTipo();
      // console.log(`Login efetuado: ${result}`);
      // console.log(`ID Usuário: ${resultToken}`);

      if (this.verificaAdmin() == true) {
        this.router.navigate(['/produtos/listar']);
      } else if (this.verificaEstoquista() == true) {
        this.router.navigate(['/estoquista/listar']);
      } else {
        this.router.navigate(['/home']);
      }


    } catch (error) {
      console.error(error);
    }
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
}
