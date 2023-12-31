import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { MoviesState } from '../../../models';
import { getMovies, getMoviesFail, getMoviesSuccess } from './movies.actions';

export const initialState: MoviesState = {
  movies: [],
  count: 0,
  error: null,
  status: HttpStatus.PENDING,
};

export const moviesReducer = createReducer(
  initialState,
  on(getMovies, (state) => ({ ...state, status: HttpStatus.LOADING })),
  on(getMoviesSuccess, (state, { movies, count }) => ({
    ...state,
    movies,
    count,
    status: HttpStatus.SUCCESS,
  })),
  on(getMoviesFail, (state, { error }) => ({
    ...state,
    error,
    status: HttpStatus.ERROR,
  }))
);
