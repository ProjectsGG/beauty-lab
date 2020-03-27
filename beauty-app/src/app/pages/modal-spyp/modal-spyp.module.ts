import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSpypPageRoutingModule } from './modal-spyp-routing.module';

import { ModalSpypPage } from './modal-spyp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSpypPageRoutingModule
  ],
  declarations: [ModalSpypPage]
})
export class ModalSpypPageModule {}
