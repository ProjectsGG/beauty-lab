import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicdonePageRoutingModule } from './medicdone-routing.module';

import { MedicdonePage } from './medicdone.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicdonePageRoutingModule
  ],
  declarations: [MedicdonePage]
})
export class MedicdonePageModule {}
