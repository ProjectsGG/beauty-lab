import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataCompletePageRoutingModule } from './data-complete-routing.module';

import { DataCompletePage } from './data-complete.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataCompletePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DataCompletePage]
})
export class DataCompletePageModule {}
