import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarShopPage } from './car-shop.page';

const routes: Routes = [
  {
    path: '',
    component: CarShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarShopPageRoutingModule {}
