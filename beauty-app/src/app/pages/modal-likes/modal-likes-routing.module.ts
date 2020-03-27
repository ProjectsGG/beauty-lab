import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalLikesPage } from './modal-likes.page';

const routes: Routes = [
  {
    path: '',
    component: ModalLikesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalLikesPageRoutingModule {}
