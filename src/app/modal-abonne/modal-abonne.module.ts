import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAbonnePageRoutingModule } from './modal-abonne-routing.module';

import { ModalAbonnePage } from './modal-abonne.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAbonnePageRoutingModule
  ],
  declarations: [ModalAbonnePage]
})
export class ModalAbonnePageModule {}
