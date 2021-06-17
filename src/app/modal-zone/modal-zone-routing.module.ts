import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalZonePage } from './modal-zone.page';

const routes: Routes = [
  {
    path: '',
    component: ModalZonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalZonePageRoutingModule {}
