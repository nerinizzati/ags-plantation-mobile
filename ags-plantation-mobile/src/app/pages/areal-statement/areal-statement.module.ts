import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArealStatementPageRoutingModule } from './areal-statement-routing.module';

import { ArealStatementPage } from './areal-statement.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArealStatementPageRoutingModule
  ],
  declarations: [ArealStatementPage]
})
export class ArealStatementPageModule {}
