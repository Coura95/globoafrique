import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationirregulierPageRoutingModule } from './stationirregulier-routing.module';

import { StationirregulierPage } from './stationirregulier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationirregulierPageRoutingModule
  ],
  declarations: [StationirregulierPage]
})
export class StationirregulierPageModule {}
