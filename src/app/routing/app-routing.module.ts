import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: "src/app/home/home.module#HomeModule",
  },
  {
    path: "movie/:id",
    loadChildren: "src/app/movie-detail/movie-detail.module#MovieDetailModule",
  },
  {
    path: "*",
    redirectTo: "",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
