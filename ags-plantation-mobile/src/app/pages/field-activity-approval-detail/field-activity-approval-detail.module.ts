import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityApprovalDetailPageRoutingModule } from './field-activity-approval-detail-routing.module';

import { FieldActivityApprovalDetailPage } from './field-activity-approval-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityApprovalDetailPageRoutingModule
  ],
  declarations: [FieldActivityApprovalDetailPage]
})
export class FieldActivityApprovalDetailPageModule {}
