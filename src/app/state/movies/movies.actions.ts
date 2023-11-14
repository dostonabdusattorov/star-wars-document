import { createAction, props } from '@ngrx/store';

export const getMovies = createAction('[Movies] Get Movies');
export const getMoviesSuccess = createAction(
  '[Movies] Get Movies Success',
  props
);
export const getMoviesFail = createAction('[Movies] Get Movies Fail', props);
