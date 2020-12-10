import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Endereco, ResponseUsers } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  responseUsers: ResponseUsers[];
  endereco: Endereco = new Endereco();
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
  listarTodas() {
    this.userService.getUsers().subscribe(response => this.responseUsers = response);
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
