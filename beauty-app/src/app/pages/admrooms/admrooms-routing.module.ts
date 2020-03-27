import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmroomsPage } from './admrooms.page';

const routes: Routes = [
  {
    path: '',
    component: AdmroomsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmroomsPageRoutingModule {}
