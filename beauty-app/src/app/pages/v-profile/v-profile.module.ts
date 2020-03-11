import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VProfilePageRoutingModule } from './v-profile-routing.module';

import { VProfilePage } from './v-profile.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VProfilePageRoutingModule,
    ComponentsModule
  ],
  declarations: [VProfilePage]
})
export class VProfilePageModule {}
