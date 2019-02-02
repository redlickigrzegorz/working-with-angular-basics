import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  declarations: [MovieCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [ MovieCardComponent ]
})
export class SharedModule { }
