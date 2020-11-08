import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FieldActivityPage } from './field-activity.page';

const routes: Routes = [
  {
    path: '',
    component: FieldActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FieldActivityPageRoutingModule {}
