import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPageNormalPageRoutingModule } from './play-page-normal-routing.module';

import { PlayPageNormalPage } from './play-page-normal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayPageNormalPageRoutingModule
  ],
  declarations: [PlayPageNormalPage]
})
export class PlayPageNormalPageModule {}
