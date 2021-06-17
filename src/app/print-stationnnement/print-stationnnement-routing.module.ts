import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintStationnnementPage } from './print-stationnnement.page';

const routes: Routes = [
  {
    path: '',
    component: PrintStationnnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintStationnnementPageRoutingModule {}
