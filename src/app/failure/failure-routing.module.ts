import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FailurePage } from './failure.page';

const routes: Routes = [
  {
    path: '',
    component: FailurePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FailurePageRoutingModule {}
