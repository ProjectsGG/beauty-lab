import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalinfoPage } from './medicalinfo.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalinfoPageRoutingModule {}
