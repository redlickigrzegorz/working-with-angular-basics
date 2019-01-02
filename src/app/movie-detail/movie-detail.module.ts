import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MovieDetailPageComponent } from './containers/movie-detail-page/movie-detail-page.component';
import { MovieDetailResolver } from './resolvers/movie-detail.resolver';
import { MatCardModule, MatListModule, MatChipsModule, MatButtonModule } from '@angular/material';
import { MovieBackendModule } from '../movie-backend';

@NgModule({
  declarations: [MovieDetailPageComponent],
  imports: [
    MatCardModule,
    MatListModule,
    MatChipsModule,
    CommonModule,
    MovieBackendModule,
    RouterModule.forChild([
      {
        path: "",
        component: MovieDetailPageComponent,
        resolve: {
          movie: MovieDetailResolver,
        },
      },
    ]),
    MatButtonModule,
  ],
  providers: [MovieDetailResolver],
})
export class MovieDetailModule {}
