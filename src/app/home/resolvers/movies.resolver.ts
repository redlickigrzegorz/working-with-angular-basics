import { Injectable } from "@angular/core";
import { MovieBackendService } from 'src/app/movie-backend';
import { Resolve } from '@angular/router';
import { Movie } from 'src/app/movie-backend/models/movie.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private movieBackendService: MovieBackendService) {}

  resolve() {
    return this.movieBackendService.fetchMovies().pipe(map(response => response.results));
  }
}
