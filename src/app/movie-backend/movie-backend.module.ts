import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MovieBackendService } from './services/movie-backend/movie-backend.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [MovieBackendService],
})
export class MovieBackendModule {}
