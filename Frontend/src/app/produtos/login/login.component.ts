import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    usuario: '',
    senha: ''
  };

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  async onSubmit() {
    try {
      const result = await this.authService.fazerLogin(this.login);
      console.log(`Login efetuado: ${result}`);

      // navego para a rota vazia novamente
      this.router.navigate(['/users/listar']);
    } catch (error) {
      console.error(error);
    }

  }
  logout(): void {
    localStorage.clear();
    location.reload();
  }

}


