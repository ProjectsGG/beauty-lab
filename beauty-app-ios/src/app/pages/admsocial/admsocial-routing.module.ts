import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmsocialPage } from './admsocial.page';

const routes: Routes = [
  {
    path: '',
    component: AdmsocialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmsocialPageRoutingModule {}
