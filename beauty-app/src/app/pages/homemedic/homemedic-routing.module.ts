import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomemedicPage } from './homemedic.page';

const routes: Routes = [
  {
    path: '',
    component: HomemedicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomemedicPageRoutingModule {}
