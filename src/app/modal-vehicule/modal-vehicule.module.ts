import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVehiculePageRoutingModule } from './modal-vehicule-routing.module';

import { ModalVehiculePage } from './modal-vehicule.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVehiculePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [ModalVehiculePage]
})
export class ModalVehiculePageModule {}
