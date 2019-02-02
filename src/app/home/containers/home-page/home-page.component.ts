import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private activatedRoute: ActivatedRoute) {}
  readonly baseUrl = 'https://image.tmdb.org/t/p/w500/';

  getFullImagePath(imagePath: string) {
    return this.baseUrl + imagePath;
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
