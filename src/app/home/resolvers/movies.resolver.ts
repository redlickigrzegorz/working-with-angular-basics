import { Injectable } from '@angular/core';
import { MovieBackendService } from 'src/app/movie-backend';
import { Resolve } from '@angular/router';
import { Movie } from 'src/app/movie-backend/models/movie.interface';
// import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MoviesResolver implements Resolve<Movie[]> {
  constructor(private movieBackendService: MovieBackendService) {}

  resolve() {
    // resolve method returns Observable, that will emit empty array -
    // replace `of([])` with observable returning real data,
    // call movieBackendService.fetchMovies, and map response to response.results - array of movies
    // Note: use rxjs map operator
    // example of mapping:
    // const source = from([1, 2, 3, 4, 5]);
    // const example = source.pipe(map(val => val + 10));
    // https://www.learnrxjs.io/operators/transformation/map.html

    const moviesResponse$ = this.movieBackendService.fetchMovies();
    return moviesResponse$.pipe(map(response => response.results));

    // return of([]);
  }
}
