import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmbeforeAfterPageRoutingModule } from './admbefore-after-routing.module';

import { AdmbeforeAfterPage } from './admbefore-after.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmbeforeAfterPageRoutingModule
  ],
  declarations: [AdmbeforeAfterPage]
})
export class AdmbeforeAfterPageModule {}
