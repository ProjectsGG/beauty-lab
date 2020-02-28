import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmplansPage } from './admplans.page';

const routes: Routes = [
  {
    path: '',
    component: AdmplansPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmplansPageRoutingModule {}
