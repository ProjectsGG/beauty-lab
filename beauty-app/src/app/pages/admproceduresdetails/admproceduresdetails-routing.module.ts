import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmproceduresdetailsPage } from './admproceduresdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AdmproceduresdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmproceduresdetailsPageRoutingModule {}
