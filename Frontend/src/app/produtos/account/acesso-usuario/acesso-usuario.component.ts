import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acesso-usuario',
  templateUrl: './acesso-usuario.component.html',
  styleUrls: ['./acesso-usuario.component.css']
})
export class AcessoUsuarioComponent implements OnInit {
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
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['/home']);
    } catch (error) {
      console.error(error);
    }
  }
}
