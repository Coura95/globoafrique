import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintInfractionPage } from './print-infraction.page';

const routes: Routes = [
  {
    path: '',
    component: PrintInfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintInfractionPageRoutingModule {}
