import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuInfractionPage } from './recu-infraction.page';

const routes: Routes = [
  {
    path: '',
    component: RecuInfractionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuInfractionPageRoutingModule {}
