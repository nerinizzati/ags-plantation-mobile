import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityAdminPageRoutingModule } from './field-activity-admin-routing.module';

import { FieldActivityAdminPage } from './field-activity-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityAdminPageRoutingModule
  ],
  declarations: [FieldActivityAdminPage]
})
export class FieldActivityAdminPageModule {}
