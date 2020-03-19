import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicdonePage } from './medicdone.page';

const routes: Routes = [
  {
    path: '',
    component: MedicdonePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicdonePageRoutingModule {}
