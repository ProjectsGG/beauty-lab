import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeBodyPageRoutingModule } from './make-body-routing.module';

import { MakeBodyPage } from './make-body.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeBodyPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MakeBodyPage]
})
export class MakeBodyPageModule {}
