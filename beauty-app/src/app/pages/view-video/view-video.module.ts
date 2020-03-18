import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVideoPageRoutingModule } from './view-video-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVideoPageRoutingModule
  ],
 
})
export class ViewVideoPageModule {}
