import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FieldActivityCreatePageRoutingModule } from './field-activity-create-routing.module';

import { FieldActivityCreatePage } from './field-activity-create.page';

import { NgPipesModule } from 'ngx-pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FieldActivityCreatePageRoutingModule,
    NgPipesModule
  ],
  declarations: [FieldActivityCreatePage]
})
export class FieldActivityCreatePageModule {}
