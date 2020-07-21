import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmsocialPageRoutingModule } from './admsocial-routing.module';

import { AdmsocialPage } from './admsocial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmsocialPageRoutingModule
  ],
  declarations: [AdmsocialPage]
})
export class AdmsocialPageModule {}
