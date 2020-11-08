import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityHarvestPage } from './field-activity-harvest.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityHarvestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityHarvestPageRoutingModule {}
