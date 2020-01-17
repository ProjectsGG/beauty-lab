import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeplanPageRoutingModule } from './makeplan-routing.module';

import { MakeplanPage } from './makeplan.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeplanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MakeplanPage]
})
export class MakeplanPageModule {}
