import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSroomPageRoutingModule } from './modal-sroom-routing.module';

import { ModalSroomPage } from './modal-sroom.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSroomPageRoutingModule
  ],
  declarations: [ModalSroomPage]
})
export class ModalSroomPageModule {}
