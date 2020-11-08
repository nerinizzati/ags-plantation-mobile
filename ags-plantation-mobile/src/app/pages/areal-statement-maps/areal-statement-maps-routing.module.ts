import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArealStatementMapsPage } from './areal-statement-maps.page';

const routes: Routes = [
  {
    path: '',
    component: ArealStatementMapsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArealStatementMapsPageRoutingModule {}
