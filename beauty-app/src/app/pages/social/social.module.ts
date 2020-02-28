import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { SocialPageRoutingModule } from './social-routing.module';

import { SocialPage } from './social.page';
import { ComponentsModule } from '../../components/components.module';
import { PopoverpostComponent } from '../../components/popoverpost/popoverpost.component';

@NgModule({
  entryComponents:[
    PopoverpostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SocialPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SocialPage]
})
export class SocialPageModule {}

