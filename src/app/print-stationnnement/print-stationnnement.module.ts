import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintStationnnementPageRoutingModule } from './print-stationnnement-routing.module';

import { PrintStationnnementPage } from './print-stationnnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintStationnnementPageRoutingModule
  ],
  declarations: [PrintStationnnementPage]
})
export class PrintStationnnementPageModule {}
