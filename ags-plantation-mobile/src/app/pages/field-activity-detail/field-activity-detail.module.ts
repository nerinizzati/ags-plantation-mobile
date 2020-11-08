import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityDetailPageRoutingModule } from './field-activity-detail-routing.module';

import { FieldActivityDetailPage } from './field-activity-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityDetailPageRoutingModule
  ],
  declarations: [FieldActivityDetailPage]
})
export class FieldActivityDetailPageModule {}
