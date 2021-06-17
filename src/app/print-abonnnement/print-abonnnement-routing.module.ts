import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintAbonnnementPage } from './print-abonnnement.page';

const routes: Routes = [
  {
    path: '',
    component: PrintAbonnnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintAbonnnementPageRoutingModule {}
