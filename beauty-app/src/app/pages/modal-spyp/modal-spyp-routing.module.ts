import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSpypPage } from './modal-spyp.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSpypPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSpypPageRoutingModule {}
