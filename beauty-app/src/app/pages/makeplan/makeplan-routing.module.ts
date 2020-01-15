import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeplanPage } from './makeplan.page';

const routes: Routes = [
  {
    path: '',
    component: MakeplanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeplanPageRoutingModule {}
