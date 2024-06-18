import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilaPageRoutingModule } from './perfila-routing.module';

import { PerfilaPage } from './perfila.page';

import { BarbeirosService, Barbeiro } from '../service/barbeiro.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilaPageRoutingModule
  ],
  declarations: [PerfilaPage],
  providers: [BarbeirosService] // Adicionando o serviço Barbeiro aos providers do módulo
})
export class PerfilaPageModule {}
