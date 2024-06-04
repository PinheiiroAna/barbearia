import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FailurePageRoutingModule } from './failure-routing.module';

import { FailurePage } from './failure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FailurePageRoutingModule
  ],
  declarations: [FailurePage]
})
export class FailurePageModule {}
