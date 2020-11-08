import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArealStatementDetailPage } from './areal-statement-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ArealStatementDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArealStatementDetailPageRoutingModule {}
