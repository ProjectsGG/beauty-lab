import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SRoomPageRoutingModule } from './s-room-routing.module';

import { SRoomPage } from './s-room.page';
import { ModalSroomPage } from '../modal-sroom/modal-sroom.page';
import { ModalSroomPageModule } from '../modal-sroom/modal-sroom.module';

@NgModule({
  entryComponents: [
    ModalSroomPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SRoomPageRoutingModule,
    ModalSroomPageModule
  ],
  declarations: [SRoomPage]
})
export class SRoomPageModule {}
