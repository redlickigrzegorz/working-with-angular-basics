import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Movie, MovieDetail } from '../../../movie-backend';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  constructor() { }
  readonly baseUrl = 'https://image.tmdb.org/t/p/w500/';

  @Input() movie: Movie | MovieDetail;
  @Output() viewMore = new EventEmitter<void>();

  getFullImagePath(imagePath: string) {
    return this.baseUrl + imagePath;
  }

  onViewMore() {
    this.viewMore.emit();
  }
}
