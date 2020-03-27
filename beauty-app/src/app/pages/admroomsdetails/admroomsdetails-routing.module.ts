import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmroomsdetailsPage } from './admroomsdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AdmroomsdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmroomsdetailsPageRoutingModule {}
