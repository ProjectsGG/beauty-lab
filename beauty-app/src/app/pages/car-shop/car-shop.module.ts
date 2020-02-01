import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarShopPageRoutingModule } from './car-shop-routing.module';

import { CarShopPage } from './car-shop.page';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarShopPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CarShopPage]
})
export class CarShopPageModule {}
