import { CheckoutComponent } from './checkout/checkout.component';
import { EstoquistaEditarComponent } from './estoquista/estoquista-editar/estoquista-editar.component';
import { EstoquistaComponent } from './estoquista/estoquista.component';
import { VisualizarComponent } from './visualizar/visualizar.component';
import { Routes } from '@angular/router';
import { ListarComponent } from './listar/listar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EditarComponent } from './editar/editar.component';

import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { UsersListarComponent } from './users-listar/users-listar.component';
import { UsersEditarComponent } from './users-editar/users-editar.component';
import { UsersCadastrarComponent } from './users-cadastrar/users-cadastrar.component';
import { LoginComponent } from './account/login/login.component';
import { HomeProdutosComponent } from './home-produtos/home-produtos.component';
import { AuthGuard } from './account/shared/auth.guard';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { EditAccountComponent } from './account/edit-account/edit-account.component';
import { AcessoUsuarioComponent } from './account/acesso-usuario/acesso-usuario.component';
import { TestesComponent } from './testes/testes.component';
import { ValidarCarrinhoComponent } from './validar-carrinho/validar-carrinho.component';



export const ProdutosRoutes: Routes = [
  {
    path: 'produtos',
    redirectTo: 'produtos/listar'

  },
  {
    path: 'produtos/listar',
    component: ListarComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'produtos/cadastrar',
    component: CadastrarComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'produtos/editar/:id',
    component: EditarComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'produtos/visualizar/:id',
    component: VisualizarComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'estoquista/listar',
    component: EstoquistaComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'estoquista/editar/:id',
    component: EstoquistaEditarComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'home',
    component: HomeProdutosComponent
  },

  {
    path: 'produto/:id',
    component: PaginaProdutoComponent
  },

  {
    path: 'users/listar',
    component: UsersListarComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'users/cadastrar',
    component: UsersCadastrarComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'users/editar/:id',
    component: UsersEditarComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'login',
    component: LoginComponent

  },

  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'novo-usuario',
    component: CreateAccountComponent
  },

  {
    path: 'editar-usuario/:id',
    component: EditAccountComponent,
    canActivate:[AuthGuard]
  },

  {
    path: 'acesso-usuario',
    component: AcessoUsuarioComponent
  },

  {
    path: 'testes',
    component: TestesComponent
  },

  {
  path: 'validar-carrinho',
  component: ValidarCarrinhoComponent
  }
  
];
