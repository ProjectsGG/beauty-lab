import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicavailablePage } from './medicavailable.page';

const routes: Routes = [
  {
    path: '',
    component: MedicavailablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicavailablePageRoutingModule {}
