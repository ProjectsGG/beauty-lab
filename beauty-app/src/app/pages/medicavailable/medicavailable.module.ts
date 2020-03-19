import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicavailablePageRoutingModule } from './medicavailable-routing.module';

import { MedicavailablePage } from './medicavailable.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicavailablePageRoutingModule
  ],
  declarations: [MedicavailablePage]
})
export class MedicavailablePageModule {}
