import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalinfoPageRoutingModule } from './medicalinfo-routing.module';

import { MedicalinfoPage } from './medicalinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalinfoPageRoutingModule
  ],
  declarations: [MedicalinfoPage]
})
export class MedicalinfoPageModule {}
