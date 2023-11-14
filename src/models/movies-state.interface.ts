import { HttpErrorResponse } from '@angular/common/http';
import { Movie } from './movie.interface';
import { HttpStatus } from '../constants';

export interface MoviesState {
  movies: Movie[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
