import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmreservasDetailPage } from './admreservas-detail.page';

const routes: Routes = [
  {
    path: '',
    component: AdmreservasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmreservasDetailPageRoutingModule {}
