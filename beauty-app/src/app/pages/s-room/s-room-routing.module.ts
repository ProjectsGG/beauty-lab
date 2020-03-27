import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SRoomPage } from './s-room.page';

const routes: Routes = [
  {
    path: '',
    component: SRoomPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SRoomPageRoutingModule {}
