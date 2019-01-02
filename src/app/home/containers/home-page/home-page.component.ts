import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/movie-backend/models/movie.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  readonly baseUrl = "https://image.tmdb.org/t/p/w500/";

  get movies() {
    return this.activatedRoute.snapshot.data.movies;
  }

  onMore(movie: Movie) {
    this.router.navigate(["movie", movie.id])
  }
}
