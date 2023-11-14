import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { Movie } from '../../../models';

export const getMovies = createAction('[Movies] Get Movies');
export const getMoviesSuccess = createAction(
  '[Movies] Get Movies Success',
  props<{ movies: Movie[] }>()
);
export const getMoviesFail = createAction(
  '[Movies] Get Movies Fail',
  props<{ error: HttpErrorResponse }>()
);
