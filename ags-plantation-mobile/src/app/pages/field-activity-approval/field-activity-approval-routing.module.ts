import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityApprovalPage } from './field-activity-approval.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityApprovalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityApprovalPageRoutingModule {}
