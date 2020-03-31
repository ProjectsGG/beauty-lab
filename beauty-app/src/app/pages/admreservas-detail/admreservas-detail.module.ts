import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmreservasDetailPageRoutingModule } from './admreservas-detail-routing.module';

import { AdmreservasDetailPage } from './admreservas-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmreservasDetailPageRoutingModule
  ],
  declarations: [AdmreservasDetailPage]
})
export class AdmreservasDetailPageModule {}
