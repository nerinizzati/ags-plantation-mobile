import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityApprovalDetailPage } from './field-activity-approval-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityApprovalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityApprovalDetailPageRoutingModule {}
