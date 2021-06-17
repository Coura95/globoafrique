import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalZonePageRoutingModule } from './modal-zone-routing.module';

import { ModalZonePage } from './modal-zone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalZonePageRoutingModule
  ],
  declarations: [ModalZonePage]
})
export class ModalZonePageModule {}
