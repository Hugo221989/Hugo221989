import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayPageNormalPage } from './play-page-normal.page';

const routes: Routes = [
  {
    path: '',
    component: PlayPageNormalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayPageNormalPageRoutingModule {}
