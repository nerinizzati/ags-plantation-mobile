import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityHistoryPageRoutingModule } from './field-activity-history-routing.module';

import { FieldActivityHistoryPage } from './field-activity-history.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityHistoryPageRoutingModule
  ],
  declarations: [FieldActivityHistoryPage]
})
export class FieldActivityHistoryPageModule {}
