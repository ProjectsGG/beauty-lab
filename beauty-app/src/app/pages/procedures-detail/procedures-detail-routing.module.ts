import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProceduresDetailPage } from './procedures-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProceduresDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProceduresDetailPageRoutingModule {}
