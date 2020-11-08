import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityHistoryAdminPage } from './field-activity-history-admin.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityHistoryAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityHistoryAdminPageRoutingModule {}
