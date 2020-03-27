import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalroomsPageRoutingModule } from './modalrooms-routing.module';

import { ModalroomsPage } from './modalrooms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalroomsPageRoutingModule
  ],
  declarations: [ModalroomsPage]
})
export class ModalroomsPageModule {}
