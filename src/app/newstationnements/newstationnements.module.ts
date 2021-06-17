import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewstationnementsPageRoutingModule } from './newstationnements-routing.module';

import { NewstationnementsPage } from './newstationnements.page';
import { IonicStorageModule } from '@ionic/storage';
import { ModalVehiculePage } from '../modal-vehicule/modal-vehicule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewstationnementsPageRoutingModule,
    IonicStorageModule

  ],
  declarations: [NewstationnementsPage,
   // ModalVehiculePage
  ]
  ,entryComponents: [ModalVehiculePage]
})
export class NewstationnementsPageModule {}
