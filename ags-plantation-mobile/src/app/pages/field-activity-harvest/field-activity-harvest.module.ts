import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityHarvestPageRoutingModule } from './field-activity-harvest-routing.module';

import { FieldActivityHarvestPage } from './field-activity-harvest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityHarvestPageRoutingModule
  ],
  declarations: [FieldActivityHarvestPage]
})
export class FieldActivityHarvestPageModule {}
