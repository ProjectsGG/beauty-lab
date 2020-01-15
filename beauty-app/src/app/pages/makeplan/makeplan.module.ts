import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeplanPageRoutingModule } from './makeplan-routing.module';

import { MakeplanPage } from './makeplan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeplanPageRoutingModule
  ],
  declarations: [MakeplanPage]
})
export class MakeplanPageModule {}
