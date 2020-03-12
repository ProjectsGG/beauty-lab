import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicpatientPageRoutingModule } from './medicpatient-routing.module';

import { MedicpatientPage } from './medicpatient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicpatientPageRoutingModule
  ],
  declarations: [MedicpatientPage]
})
export class MedicpatientPageModule {}
