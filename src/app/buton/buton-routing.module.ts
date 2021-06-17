import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButonPage } from './buton.page';

const routes: Routes = [
  {
    path: '',
    component: ButonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButonPageRoutingModule {}
