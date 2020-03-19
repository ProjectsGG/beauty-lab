import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicregisterPageRoutingModule } from './medicregister-routing.module';

import { MedicregisterPage } from './medicregister.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicregisterPageRoutingModule
  ],
  declarations: [MedicregisterPage]
})
export class MedicregisterPageModule {}
