import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { MoviesState } from '../../../models';

export const moviesSelector = createSelector(
  (state: AppState) => state.movies,
  (state: MoviesState) => state
);
