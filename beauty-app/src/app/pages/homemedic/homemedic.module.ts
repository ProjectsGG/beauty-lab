import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomemedicPageRoutingModule } from './homemedic-routing.module';

import { HomemedicPage } from './homemedic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomemedicPageRoutingModule
  ],
  declarations: [HomemedicPage]
})
export class HomemedicPageModule {}
