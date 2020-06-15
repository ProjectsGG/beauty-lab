import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdmproceduresPage } from './admprocedures.page';

const routes: Routes = [
  {
    path: '',
    component: AdmproceduresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmproceduresPageRoutingModule {}
