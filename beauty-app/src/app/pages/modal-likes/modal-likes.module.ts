import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalLikesPageRoutingModule } from './modal-likes-routing.module';

import { ModalLikesPage } from './modal-likes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalLikesPageRoutingModule
  ],
  declarations: [ModalLikesPage]
})
export class ModalLikesPageModule {}
