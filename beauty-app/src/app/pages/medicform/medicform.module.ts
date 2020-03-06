import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicformPageRoutingModule } from './medicform-routing.module';

import { MedicformPage } from './medicform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicformPageRoutingModule
  ],
  declarations: [MedicformPage]
})
export class MedicformPageModule {}
