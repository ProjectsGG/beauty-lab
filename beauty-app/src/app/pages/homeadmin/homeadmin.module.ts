import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeadminPageRoutingModule } from './homeadmin-routing.module';

import { HomeadminPage } from './homeadmin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeadminPageRoutingModule
  ],
  declarations: [HomeadminPage]
})
export class HomeadminPageModule {}
