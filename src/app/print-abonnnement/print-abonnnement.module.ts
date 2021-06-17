import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintAbonnnementPageRoutingModule } from './print-abonnnement-routing.module';

import { PrintAbonnnementPage } from './print-abonnnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintAbonnnementPageRoutingModule
  ],
  declarations: [PrintAbonnnementPage]
})
export class PrintAbonnnementPageModule {}
