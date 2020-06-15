import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmreservasPageRoutingModule } from './admreservas-routing.module';

import { AdmreservasPage } from './admreservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmreservasPageRoutingModule
  ],
  declarations: [AdmreservasPage]
})
export class AdmreservasPageModule {}
