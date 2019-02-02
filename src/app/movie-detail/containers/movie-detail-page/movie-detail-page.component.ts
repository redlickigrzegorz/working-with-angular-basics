import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieDetail} from '../../../movie-backend';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent {
  constructor(private activatedRoute: ActivatedRoute) {}

  onViewMore(movie: MovieDetail) {
    (<any>window).location.href = movie.homepage;
  }

  get movieDetail(): MovieDetail {
    return this.activatedRoute.snapshot.data.movieDetail;
  }

}
