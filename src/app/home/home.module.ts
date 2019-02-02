import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { RouterModule, Route } from '@angular/router';
import { MoviesResolver } from './resolvers/movies.resolver';
import { MovieBackendModule } from '../movie-backend';
import { MatCardModule, MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
    resolve: { movies: MoviesResolver },
    // Use MoviesResolver here
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MovieBackendModule,
    SharedModule,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [HomePageComponent],
  providers: [MoviesResolver],
})
export class HomeModule {}
