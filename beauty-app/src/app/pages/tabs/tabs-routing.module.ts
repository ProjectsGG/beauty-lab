import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../homeapp/homeapp.module').then(m => m.HomeappPageModule)
          }
        ]
      },
      {
        path: 'shop',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../shop/shop.module').then(m => m.ShopPageModule)
          }
        ]
      },
      {
        path: 'social',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../social/social.module').then(m => m.SocialPageModule)
          }
        ]
      },
      {
        path: 'car-shop',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../car-shop/car-shop.module').then(m => m.CarShopPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
