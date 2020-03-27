import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeBodyPage } from './make-body.page';

const routes: Routes = [
  {
    path: '',
    component: MakeBodyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeBodyPageRoutingModule {}
