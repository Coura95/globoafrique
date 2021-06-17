import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StationnementsPageRoutingModule } from './stationnements-routing.module';

import { StationnementsPage } from './stationnements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StationnementsPageRoutingModule
  ],
  declarations: [StationnementsPage]
})
export class StationnementsPageModule {}
