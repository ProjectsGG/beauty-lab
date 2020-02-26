import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmplansdetailsPage } from './admplansdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AdmplansdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmplansdetailsPageRoutingModule {}
