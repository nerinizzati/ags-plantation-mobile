import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityPageRoutingModule } from './field-activity-routing.module';

import { FieldActivityPage } from './field-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityPageRoutingModule
  ],
  declarations: [FieldActivityPage]
})
export class FieldActivityPageModule {}
