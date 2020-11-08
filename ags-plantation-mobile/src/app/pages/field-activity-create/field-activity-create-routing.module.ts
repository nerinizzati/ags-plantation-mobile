import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityCreatePage } from './field-activity-create.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityCreatePageRoutingModule {}
