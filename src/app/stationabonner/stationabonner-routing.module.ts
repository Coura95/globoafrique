import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationabonnerPage } from './stationabonner.page';

const routes: Routes = [
  {
    path: '',
    component: StationabonnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationabonnerPageRoutingModule {}
