import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmbeforeAfterPage } from './admbefore-after.page';

const routes: Routes = [
  {
    path: '',
    component: AdmbeforeAfterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmbeforeAfterPageRoutingModule {}
