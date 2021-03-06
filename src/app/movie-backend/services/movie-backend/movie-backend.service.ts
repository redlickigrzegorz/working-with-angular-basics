import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";
import { Movie, PaginatedResponse } from '../../models/movie.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieBackendService {
  private readonly baseUrl = "https://api.themoviedb.org/3";
  constructor(private http: HttpClient) {}

  fetchMovies(): Observable<PaginatedResponse<Movie>> {
    // GET method
    const url = `${this.baseUrl}/discover/movie`;
    const params = { api_key: environment.moviedbApiKey };
    // fetchMovies returns observable, that will never emit any value
    // Use injected HttpClient - documentation https://angular.io/guide/http
    // Pass PaginatedRespnse<Movie> when calling get, to provide provide returned type:
    // this.http.get<PaginatedResponse<Movie>>(...)

    return of();
  }
}
