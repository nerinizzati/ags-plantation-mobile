import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarvestPlanPage } from './harvest-plan.page';

const routes: Routes = [
  {
    path: '',
    component: HarvestPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarvestPlanPageRoutingModule {}
