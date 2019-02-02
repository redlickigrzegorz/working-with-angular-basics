import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Movie, MovieBackendService } from '../../../movie-backend';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private movieBackendService: MovieBackendService) {}
  search = new FormControl('');
  searchedMovies = [];

  onViewMore(movie: Movie) {
    return this.router.navigateByUrl(`movie/${movie.id}`);
  }

  get movies() {
    // To access data resolved by angular router, replace 'yourResolvedVaraible'
    // with property passed to resolver
    /*
      {
        path: '',
        component: HomePageComponent,
        resolve: {
          yourResolvedVariable: YourResolver
        },
      }
    */
    if (this.searchedMovies.length > 0) {
      return this.searchedMovies;
    }
    return this.activatedRoute.snapshot.data.movies;
  }

  ngOnInit() {
    this.search.valueChanges
      .pipe(
        debounceTime(400),
        distinctUntilChanged(),
        switchMap((searchedText) => {
          if (searchedText !== '') {
            const moviesResponse$ = this.movieBackendService.searchMovie(searchedText);
            return moviesResponse$.pipe(map(response => response.results));
          }
          return of(this.activatedRoute.snapshot.data.movies);
        }),
      ).subscribe((response) => this.searchedMovies = response);
  }
}
