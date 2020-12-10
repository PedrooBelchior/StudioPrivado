import { Component, OnInit, ViewChild } from '@angular/core';
import { ResponseUsers, Endereco, User } from '../../shared/user.model';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  responseUsers: ResponseUsers[];
  endereco: Endereco = new Endereco();
  itemSelected: any;

  @ViewChild('formProduto', { static: true }) formProduto: NgForm;

  request: User = {
    _id: null,
    usuario: null,
    password: null,
    email: null,
    cpf: null,
    endereco: [],
    tipo: "Comum",
    nome: null,
    sobrenome: null,
    statusUsuario: "Ativo",
    pedido:[],
  };
  validarCPF = true;
  validarEmail = true;
  constructor(
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.listarTodas();
  }

  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
  }

  // async onSubmit(){
  //   try{
  //     const result = await this.accountService.createAccount(this.request);
  //     console.log(result);
  //   }catch(error){
  //     console.error(error);
  //   }
  // }

  register(): void {
    if (this.formProduto.form.valid) {
        this.userService.createUser(this.request).subscribe();
        this.router.navigate(['/home']);
    }
  }

  verificaUsers() {
    this.http.get(`//localhost:3000/users`)
      .pipe(map(Users => Users))
      // .subscribe(Users => console.log(Users));
      .subscribe(Users => this.validaCPF(Users));
  }

  validaCPF(Users) {
    console.log("---> CPF", this.validarCPF);

    for (let user of Users) {

      if (this.request.cpf.includes(user.cpf)) {
        console.log("Já Existe:", user.cpf);
        this.validarCPF = true;
        const cpfDiv = document.getElementById("cpfInvalido");
        cpfDiv.style.color = "#DC3545";
        document.getElementById("cpfInvalido").innerHTML = "CPF já existente, por favor utilize outro!";
        console.log(this.validarCPF);
        break;
      } else {
        this.validarCPF = false;
        const cpfDiv = document.getElementById("cpfInvalido");
        cpfDiv.style.color = "#28A745";
        document.getElementById("cpfInvalido").innerHTML = "Ok!";
        console.log(this.validarCPF);
      }

    }

  }

  verificaEmail() {
    this.http.get(`//localhost:3000/users`)
      .pipe(map(Users => Users))
      // .subscribe(Users => console.log(Users));
      .subscribe(Users => this.validaEmail(Users));
  }

  validaEmail(Users) {
    console.log("---> Email", this.validarEmail);

    for (let user of Users) {

      if (this.request.email.includes(user.email)) {
        console.log("Já Existe:", user.email);
        this.validarEmail = true;
        const objDiv = document.getElementById("emailInvalido");
        objDiv.style.color = "#DC3545";
        document.getElementById("emailInvalido").innerHTML = "E-mail já existente, por favor utilize outro!";
        console.log(this.validarEmail);
        break;
      } else {
        this.validarEmail = false;
        const objDiv = document.getElementById("emailInvalido");
        objDiv.style.color = "#28A745";
        document.getElementById("emailInvalido").innerHTML = "Ok!";
        console.log(this.validarEmail);
      }
    }
  }


  // validatePassword(senha,confirmaSenha) {
  //   senha = document.getElementById("senha");
  //   confirmaSenha = document.getElementById("confirmaSenha");
  //   if (senha != confirmaSenha) {
  //     confirmaSenha.setCustomValidity("Senhas diferentes!");
  //   } else {
  //     confirmaSenha.setCustomValidity('');
  //   }
  // }


  enderecos(): void {
    this.request.endereco.push(this.endereco);
    console.log(this.request.endereco);
    this.endereco = new Endereco();
  }
  selecionarItem(itemSelecionado: any) {
    this.itemSelected = itemSelecionado;
  }

  cancelarEndereco() {
    this.request.endereco.splice(this.itemSelected, 1);
  }

  consultaCEP(cep, form) {

    // Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    // Verifica se campo cep possui valor informado.
    // tslint:disable-next-line: triple-equals
    if (cep != '') {

      // Expressão regular para validar o CEP.
      // tslint:disable-next-line: prefer-const
      let validacep = /^[0-9]{8}$/;

      // Valida o formato do CEP.
      if (validacep.test(cep)) {
        this.http.get(`//viacep.com.br/ws/${cep}/json`)
          .pipe(map(dados => dados))
          .subscribe(dados => this.populaDadosForm(dados, form));
        // .subscribe(dados => console.log(dados));

      }
    }
  }

  populaDadosForm(dados, form) {
    form.setValue({
      nome: form.value.nome,
      sobrenome: form.value.sobrenome,
      email: form.value.email,
      cpf: form.value.cpf,      
      senha: form.value.senha,
      rua: dados.logradouro,
      cep: dados.cep,
      numero: '',
      complemento: '',
      bairro: dados.bairro,
      pais: '',
      estado: dados.uf,
      cidade: dados.localidade
      
    });
  }
}
