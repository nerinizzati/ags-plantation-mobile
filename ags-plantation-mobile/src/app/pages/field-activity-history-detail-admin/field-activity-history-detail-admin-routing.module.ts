import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityHistoryDetailAdminPage } from './field-activity-history-detail-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityHistoryDetailAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityHistoryDetailAdminPageRoutingModule {}
