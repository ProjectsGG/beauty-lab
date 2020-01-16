import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVideoPageRoutingModule } from './view-video-routing.module';

import { ViewVideoPage } from './view-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVideoPageRoutingModule
  ],
  declarations: [ViewVideoPage]
})
export class ViewVideoPageModule {}
