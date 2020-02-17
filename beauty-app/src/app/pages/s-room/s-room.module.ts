import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SRoomPageRoutingModule } from './s-room-routing.module';

import { SRoomPage } from './s-room.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SRoomPageRoutingModule
  ],
  declarations: [SRoomPage]
})
export class SRoomPageModule {}
