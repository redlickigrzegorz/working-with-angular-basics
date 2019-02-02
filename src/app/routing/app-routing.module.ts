import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Route home module to { path: "" }
  // https://angular.io/guide/lazy-loading-ngmodules
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
