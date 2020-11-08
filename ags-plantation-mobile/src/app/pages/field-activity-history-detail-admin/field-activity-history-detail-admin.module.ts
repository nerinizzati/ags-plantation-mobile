import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityHistoryDetailAdminPageRoutingModule } from './field-activity-history-detail-admin-routing.module';

import { FieldActivityHistoryDetailAdminPage } from './field-activity-history-detail-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityHistoryDetailAdminPageRoutingModule
  ],
  declarations: [FieldActivityHistoryDetailAdminPage]
})
export class FieldActivityHistoryDetailAdminPageModule {}
