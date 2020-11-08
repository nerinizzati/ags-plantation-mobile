import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArealStatementDetailPageRoutingModule } from './areal-statement-detail-routing.module';

import { ArealStatementDetailPage } from './areal-statement-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArealStatementDetailPageRoutingModule
  ],
  declarations: [ArealStatementDetailPage]
})
export class ArealStatementDetailPageModule {}
