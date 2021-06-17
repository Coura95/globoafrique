import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewstationnementsPage } from './newstationnements.page';

const routes: Routes = [
  {
    path: '',
    component: NewstationnementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewstationnementsPageRoutingModule {}
