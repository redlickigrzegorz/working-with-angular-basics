import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../../movie-backend';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

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
    return this.activatedRoute.snapshot.data.movies;
  }
}
