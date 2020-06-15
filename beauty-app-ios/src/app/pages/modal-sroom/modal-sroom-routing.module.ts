import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSroomPage } from './modal-sroom.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSroomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSroomPageRoutingModule {}
