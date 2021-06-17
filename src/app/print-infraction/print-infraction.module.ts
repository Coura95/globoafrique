import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintInfractionPageRoutingModule } from './print-infraction-routing.module';

import { PrintInfractionPage } from './print-infraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintInfractionPageRoutingModule
  ],
  declarations: [PrintInfractionPage]
})
export class PrintInfractionPageModule {}
