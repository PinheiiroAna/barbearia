import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrocaPageRoutingModule } from './troca-routing.module';

import { TrocaPage } from './troca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrocaPageRoutingModule
  ],
  declarations: [TrocaPage]
})
export class TrocaPageModule {}
