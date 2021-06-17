import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuInfractionPageRoutingModule } from './recu-infraction-routing.module';

import { RecuInfractionPage } from './recu-infraction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuInfractionPageRoutingModule
  ],
  declarations: [RecuInfractionPage]
})
export class RecuInfractionPageModule {}
