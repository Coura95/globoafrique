import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalStationPage } from './modal-station.page';

const routes: Routes = [
  {
    path: '',
    component: ModalStationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalStationPageRoutingModule {}
