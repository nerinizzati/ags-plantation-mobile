import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityHistoryAdminPageRoutingModule } from './field-activity-history-admin-routing.module';

import { FieldActivityHistoryAdminPage } from './field-activity-history-admin.page';

import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityHistoryAdminPageRoutingModule,
    NgPipesModule
  ],
  declarations: [FieldActivityHistoryAdminPage]
})
export class FieldActivityHistoryAdminPageModule {}
