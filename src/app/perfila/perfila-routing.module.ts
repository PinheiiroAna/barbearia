import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilaPage } from './perfila.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilaPageRoutingModule {}
