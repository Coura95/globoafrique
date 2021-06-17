import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationabonnerPageRoutingModule } from './stationabonner-routing.module';

import { StationabonnerPage } from './stationabonner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationabonnerPageRoutingModule
  ],
  declarations: [StationabonnerPage]
})
export class StationabonnerPageModule {}
