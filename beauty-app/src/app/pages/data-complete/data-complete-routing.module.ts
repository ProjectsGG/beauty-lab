import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataCompletePage } from './data-complete.page';

const routes: Routes = [
  {
    path: '',
    component: DataCompletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataCompletePageRoutingModule {}
