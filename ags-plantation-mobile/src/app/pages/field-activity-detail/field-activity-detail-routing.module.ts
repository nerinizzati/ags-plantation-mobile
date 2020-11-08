import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityDetailPage } from './field-activity-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityDetailPageRoutingModule {}
