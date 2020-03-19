import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicregisterPage } from './medicregister.page';

const routes: Routes = [
  {
    path: '',
    component: MedicregisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicregisterPageRoutingModule {}
