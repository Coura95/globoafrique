import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuStationnementPage } from './recu-stationnement.page';

const routes: Routes = [
  {
    path: '',
    component: RecuStationnementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuStationnementPageRoutingModule {}
