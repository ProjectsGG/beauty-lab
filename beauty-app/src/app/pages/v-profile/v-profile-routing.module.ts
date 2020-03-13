import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VProfilePage } from './v-profile.page';

const routes: Routes = [
  {
    path: '',
    component: VProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VProfilePageRoutingModule {}
