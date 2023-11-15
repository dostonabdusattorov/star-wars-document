import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { MoviesService } from '../../../services';
import { getMovies, getMoviesSuccess, getMoviesFail } from './movies.actions';

@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions, private moviesSer: MoviesService) {}

  getMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getMovies),
      switchMap(() =>
        from(this.moviesSer.getMovies()).pipe(
          map(({ count, results }) =>
            getMoviesSuccess({ count, movies: results })
          ),
          catchError((error) => of(getMoviesFail({ error })))
        )
      )
    )
  );
}
