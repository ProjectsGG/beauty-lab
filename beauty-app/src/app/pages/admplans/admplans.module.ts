import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdmplansPageRoutingModule } from './admplans-routing.module';

import { AdmplansPage } from './admplans.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdmplansPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdmplansPage]
})
export class AdmplansPageModule {}
