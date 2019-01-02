import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from "src/environments/environment";
import { Movie, PaginatedResponse, MovieDetail } from '../../models/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieBackendService {
  private readonly baseUrl = "https://api.themoviedb.org/3";
  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http.get<PaginatedResponse<Movie>>(`${this.baseUrl}/discover/movie`, {
      params: { api_key: environment.moviedbApiKey },
    });
  }

  fetchMovie(id: number) {
    return this.http.get<MovieDetail>(`${this.baseUrl}/movie/${id}`, {
      params: { api_key: environment.moviedbApiKey }
    });
  }
}
