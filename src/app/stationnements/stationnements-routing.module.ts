import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StationnementsPage } from './stationnements.page';

const routes: Routes = [
  {
    path: '',
    component: StationnementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StationnementsPageRoutingModule {}
