import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProceduresDetailPageRoutingModule } from './procedures-detail-routing.module';

import { ProceduresDetailPage } from './procedures-detail.page';
import { ComponentsModule } from '../../components/components.module';
import { CalendarModule } from 'ion2-calendar';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProceduresDetailPageRoutingModule,
    ComponentsModule,
    CalendarModule
  ],
  declarations: [ProceduresDetailPage]
})
export class ProceduresDetailPageModule {}
