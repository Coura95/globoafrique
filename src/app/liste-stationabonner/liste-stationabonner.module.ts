import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeStationabonnerPageRoutingModule } from './liste-stationabonner-routing.module';

import { ListeStationabonnerPage } from './liste-stationabonner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeStationabonnerPageRoutingModule
  ],
  declarations: [ListeStationabonnerPage]
})
export class ListeStationabonnerPageModule {}
