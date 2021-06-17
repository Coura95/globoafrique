import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuStationnementPageRoutingModule } from './recu-stationnement-routing.module';

import { RecuStationnementPage } from './recu-stationnement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuStationnementPageRoutingModule
  ],
  declarations: [RecuStationnementPage]
})
export class RecuStationnementPageModule {}
