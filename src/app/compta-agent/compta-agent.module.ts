import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComptaAgentPageRoutingModule } from './compta-agent-routing.module';

import { ComptaAgentPage } from './compta-agent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComptaAgentPageRoutingModule
  ],
  declarations: [ComptaAgentPage]
})
export class ComptaAgentPageModule {}
