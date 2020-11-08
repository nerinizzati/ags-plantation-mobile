import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityApprovalPageRoutingModule } from './field-activity-approval-routing.module';

import { FieldActivityApprovalPage } from './field-activity-approval.page';

import { NgPipesModule } from 'ngx-pipes';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityApprovalPageRoutingModule,
    NgPipesModule
  ],
  declarations: [FieldActivityApprovalPage]
})
export class FieldActivityApprovalPageModule {}
