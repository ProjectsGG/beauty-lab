import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmproceduresdetailsPageRoutingModule } from './admproceduresdetails-routing.module';

import { AdmproceduresdetailsPage } from './admproceduresdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdmproceduresdetailsPageRoutingModule
  ],
  declarations: [AdmproceduresdetailsPage]
})
export class AdmproceduresdetailsPageModule {}
