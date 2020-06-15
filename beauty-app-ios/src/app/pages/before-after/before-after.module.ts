import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BeforeAfterPageRoutingModule } from './before-after-routing.module';

import { BeforeAfterPage } from './before-after.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeforeAfterPageRoutingModule,
    ComponentsModule
  ],
  declarations: [BeforeAfterPage]
})
export class BeforeAfterPageModule {}
