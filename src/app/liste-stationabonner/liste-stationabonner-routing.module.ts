import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeStationabonnerPage } from './liste-stationabonner.page';

const routes: Routes = [
  {
    path: '',
    component: ListeStationabonnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeStationabonnerPageRoutingModule {}
