import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicformPage } from './medicform.page';

const routes: Routes = [
  {
    path: '',
    component: MedicformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicformPageRoutingModule {}
