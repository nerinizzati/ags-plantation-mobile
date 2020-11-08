import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarvestPlanPageRoutingModule } from './harvest-plan-routing.module';

import { HarvestPlanPage } from './harvest-plan.page';

import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarvestPlanPageRoutingModule,
    NgPipesModule
  ],
  declarations: [HarvestPlanPage]
})
export class HarvestPlanPageModule {}
