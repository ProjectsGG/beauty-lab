import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeappPage } from './homeapp.page';

const routes: Routes = [
  {
    path: '',
    component: HomeappPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeappPageRoutingModule {}
