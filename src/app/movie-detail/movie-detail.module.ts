import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailPageComponent } from './containers/movie-detail-page/movie-detail-page.component';
import { Route, RouterModule } from '@angular/router';
import { MovieBackendModule } from '../movie-backend';
import { MatCardModule, MatChipsModule, MatListModule } from '@angular/material';
import { MovieDetailResolver } from './resolvers/movie-detail.resolver';

const routes: Route[] = [
  {
    path: ':id',
    component: MovieDetailPageComponent,
    resolve: { movieDetail: MovieDetailResolver },
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    MovieBackendModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
  ],
  declarations: [MovieDetailPageComponent],
  providers: [MovieDetailResolver],
})
export class MovieDetailModule { }
