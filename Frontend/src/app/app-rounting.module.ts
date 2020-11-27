import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosRoutes } from './produtos/produtos-rounting.module';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'produtos/listar',
    pathMatch: 'full'
  },

  ...ProdutosRoutes


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRountingModule { }
