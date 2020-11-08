import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArealStatementPage } from './areal-statement.page';

const routes: Routes = [
  {
    path: '',
    component: ArealStatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArealStatementPageRoutingModule {}
