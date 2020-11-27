import { CheckoutComponent } from './checkout/checkout.component';
import { UsersCadastrarComponent } from './users-cadastrar/users-cadastrar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// MDB Angular Free
import { ModalModule, WavesModule, InputsModule, ButtonsModule, ModalDirective } from 'angular-bootstrap-md';

import { ProdutoService } from './shared/produto.service';
import { UserService } from './shared/user.service';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { EstoquistaEditarComponent } from './estoquista/estoquista-editar/estoquista-editar.component';
import { EstoquistaComponent } from './estoquista/estoquista.component';

import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { UsersListarComponent } from './users-listar/users-listar.component';
import { UsersEditarComponent } from './users-editar/users-editar.component';
import { LoginComponent } from './account/login/login.component';
import { HomeProdutosComponent } from './home-produtos/home-produtos.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { AcessoUsuarioComponent } from './account/acesso-usuario/acesso-usuario.component';
import { TestesComponent } from './testes/testes.component';

@NgModule({
  declarations: [ListarComponent,
    CadastrarComponent,
    EditarComponent,
    VisualizarComponent,
    EstoquistaComponent,
    EstoquistaEditarComponent,
    HomeProdutosComponent,
    PaginaProdutoComponent,
    UsersListarComponent,
    UsersEditarComponent,
    UsersCadastrarComponent,
    LoginComponent,
    CheckoutComponent,
    CreateAccountComponent,
    EditAccountComponent,
    AcessoUsuarioComponent,
    TestesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ModalModule,
    WavesModule,
    InputsModule,
    ButtonsModule
  ],
  providers: [
    ProdutoService,
    UserService,
    RouterModule,
    ModalDirective,

  ]
})
export class ProdutosModule { }
