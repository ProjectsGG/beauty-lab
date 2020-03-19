import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicprofilePageRoutingModule } from './medicprofile-routing.module';

import { MedicprofilePage } from './medicprofile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicprofilePageRoutingModule
  ],
  declarations: [MedicprofilePage]
})
export class MedicprofilePageModule {}
