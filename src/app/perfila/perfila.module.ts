import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilaPageRoutingModule } from './perfila-routing.module';

import { PerfilaPage } from './perfila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilaPageRoutingModule
  ],
  declarations: [PerfilaPage]
})
export class PerfilaPageModule {}
