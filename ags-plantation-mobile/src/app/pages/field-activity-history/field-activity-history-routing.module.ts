import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityHistoryPage } from './field-activity-history.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityHistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityHistoryPageRoutingModule {}
