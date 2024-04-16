import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrocaPage } from './troca.page';

const routes: Routes = [
  {
    path: '',
    component: TrocaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrocaPageRoutingModule {}
