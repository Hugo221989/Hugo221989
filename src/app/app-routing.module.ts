import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'level',
    loadChildren: () => import('./level/level/level.module').then( m => m.LevelPageModule)
  },
  {
    path: 'play-page',
    loadChildren: () => import('./playPage/play-page/play-page.module').then( m => m.PlayPagePageModule)
  },
  {
    path: 'play-page-normal',
    loadChildren: () => import('./playPageNormal/play-page-normal/play-page-normal.module').then( m => m.PlayPageNormalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
