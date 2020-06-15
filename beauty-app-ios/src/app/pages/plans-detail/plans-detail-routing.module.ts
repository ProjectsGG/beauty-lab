import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlansDetailPage } from './plans-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PlansDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlansDetailPageRoutingModule {}
