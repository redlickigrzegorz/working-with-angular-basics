import { Injectable } from '@angular/core';
import { MovieBackendService } from 'src/app/movie-backend';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MovieDetail } from 'src/app/movie-backend/models/movie.interface';

@Injectable({
  providedIn: 'root',
})
export class MovieDetailResolver implements Resolve<MovieDetail> {
  constructor(private movieBackendService: MovieBackendService) {}

  resolve(snapshot: ActivatedRouteSnapshot) {
    const id = snapshot.params.id;
    return this.movieBackendService.fetchMovie(id);
  }
}
