import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeStationirregulierPageRoutingModule } from './liste-stationirregulier-routing.module';

import { ListeStationirregulierPage } from './liste-stationirregulier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeStationirregulierPageRoutingModule
  ],
  declarations: [ListeStationirregulierPage]
})
export class ListeStationirregulierPageModule {}
