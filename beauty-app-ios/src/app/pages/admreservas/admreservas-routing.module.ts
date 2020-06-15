import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmreservasPage } from './admreservas.page';

const routes: Routes = [
  {
    path: '',
    component: AdmreservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmreservasPageRoutingModule {}
