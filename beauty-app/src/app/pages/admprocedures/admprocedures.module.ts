import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmproceduresPageRoutingModule } from './admprocedures-routing.module';

import { AdmproceduresPage } from './admprocedures.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmproceduresPageRoutingModule
  ],
  declarations: [AdmproceduresPage]
})
export class AdmproceduresPageModule {}
