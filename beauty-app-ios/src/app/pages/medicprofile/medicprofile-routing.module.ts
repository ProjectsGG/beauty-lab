import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicprofilePage } from './medicprofile.page';

const routes: Routes = [
  {
    path: '',
    component: MedicprofilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicprofilePageRoutingModule {}
