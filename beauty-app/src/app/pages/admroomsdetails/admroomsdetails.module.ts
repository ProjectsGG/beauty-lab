import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmroomsdetailsPageRoutingModule } from './admroomsdetails-routing.module';

import { AdmroomsdetailsPage } from './admroomsdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmroomsdetailsPageRoutingModule
  ],
  declarations: [AdmroomsdetailsPage]
})
export class AdmroomsdetailsPageModule {}
