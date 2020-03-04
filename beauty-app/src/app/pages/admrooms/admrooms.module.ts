import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmroomsPageRoutingModule } from './admrooms-routing.module';

import { AdmroomsPage } from './admrooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmroomsPageRoutingModule
  ],
  declarations: [AdmroomsPage]
})
export class AdmroomsPageModule {}
