import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalStationPageRoutingModule } from './modal-station-routing.module';

import { ModalStationPage } from './modal-station.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalStationPageRoutingModule
  ],
  declarations: [ModalStationPage]
})
export class ModalStationPageModule {}
