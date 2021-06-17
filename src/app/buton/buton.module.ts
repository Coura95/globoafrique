import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButonPageRoutingModule } from './buton-routing.module';

import { ButonPage } from './buton.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButonPageRoutingModule
  ],
  declarations: [ButonPage]
})
export class ButonPageModule {}
