import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArealStatementMapsPageRoutingModule } from './areal-statement-maps-routing.module';

import { ArealStatementMapsPage } from './areal-statement-maps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArealStatementMapsPageRoutingModule
  ],
  declarations: [ArealStatementMapsPage]
})
export class ArealStatementMapsPageModule {}
