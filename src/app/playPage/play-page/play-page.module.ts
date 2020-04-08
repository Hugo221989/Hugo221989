import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayPagePageRoutingModule } from './play-page-routing.module';

import { PlayPagePage } from './play-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayPagePageRoutingModule
  ],
  declarations: [PlayPagePage]
})
export class PlayPagePageModule {}
