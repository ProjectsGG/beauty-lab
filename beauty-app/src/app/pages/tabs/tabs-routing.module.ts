import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
        { path: 'home', loadChildren: '../homeapp/homeapp.module#HomeappPageModule' },
        { path: 'shop', loadChildren: '../shop/shop.module#ShopPageModule' },
        { path: 'social', loadChildren: '../social/social.module#SocialPageModule'},
        { path: 'car-shop', loadChildren: '../car-shop/car-shop.module#CarShopPageModule'}
    ]
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
