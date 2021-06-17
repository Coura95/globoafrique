import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAbonnePage } from './modal-abonne.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAbonnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAbonnePageRoutingModule {}
