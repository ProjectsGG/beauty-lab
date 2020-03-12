import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicpatientPage } from './medicpatient.page';

const routes: Routes = [
  {
    path: '',
    component: MedicpatientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicpatientPageRoutingModule {}
