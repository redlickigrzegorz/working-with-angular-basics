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
  readonly baseUrl = 'https://image.tmdb.org/t/p/w500/';

  getFullImagePath(imagePath: string) {
    return this.baseUrl + imagePath;
  }

  get movieDetail(): MovieDetail {
    return this.activatedRoute.snapshot.data.movieDetail;
  }

}
