import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVehiculePage } from './modal-vehicule.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVehiculePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVehiculePageRoutingModule {}
