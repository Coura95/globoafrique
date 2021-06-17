import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComptaAgentPage } from './compta-agent.page';

const routes: Routes = [
  {
    path: '',
    component: ComptaAgentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComptaAgentPageRoutingModule {}
