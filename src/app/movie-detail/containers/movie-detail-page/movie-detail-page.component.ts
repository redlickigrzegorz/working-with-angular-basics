import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/movie-backend/models/movie.interface';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrls: ['./movie-detail-page.component.scss']
})
export class MovieDetailPageComponent implements OnInit {
  readonly baseUrl = "https://image.tmdb.org/t/p/w500/";
  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) {}

  ngOnInit() {}

  get movie(): MovieDetail {
    return this.activatedRoute.snapshot.data.movie;
  }

  get genres() {
    return this.movie.genres.map(genre => genre.name).join(", ");
  }

  onMore(movie: MovieDetail) {
    (<any>window).location.href = movie.homepage;
  }
}
