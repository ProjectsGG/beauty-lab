import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmplansdetailsPageRoutingModule } from './admplansdetails-routing.module';

import { AdmplansdetailsPage } from './admplansdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmplansdetailsPageRoutingModule
  ],
  declarations: [AdmplansdetailsPage]
})
export class AdmplansdetailsPageModule {}
