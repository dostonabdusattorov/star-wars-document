import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, from, map, of, switchMap } from 'rxjs';
import { DocumentsService } from '../../../services';
import {
  getPeople,
  getPeopleSuccess,
  getPeopleFail,
  getPlanets,
  getPlanetsSuccess,
  getPlanetsFail,
  getSpecies,
  getSpeciesSuccess,
  getSpeciesFail,
  getStarships,
  getStarshipsSuccess,
  getStarshipsFail,
  getVehicles,
  getVehiclesSuccess,
  getVehiclesFail,
} from './documents.actions';

@Injectable()
export class DocumentsEffects {
  constructor(
    private actions$: Actions,
    private documentsSer: DocumentsService
  ) {}

  getPeople$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPeople),
      switchMap(({ pageIndex }) =>
        from(this.documentsSer.getPeople(pageIndex)).pipe(
          map(({ count, results }) =>
            getPeopleSuccess({ count, people: results })
          ),
          catchError((error) => of(getPeopleFail({ error })))
        )
      )
    )
  );

  getPlanets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPlanets),
      switchMap(({ pageIndex }) =>
        from(this.documentsSer.getPlanets(pageIndex)).pipe(
          map(({ count, results }) =>
            getPlanetsSuccess({ count, planets: results })
          ),
          catchError((error) => of(getPlanetsFail({ error })))
        )
      )
    )
  );

  getSpecies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getSpecies),
      switchMap(({ pageIndex }) =>
        from(this.documentsSer.getSpecies(pageIndex)).pipe(
          map(({ count, results }) =>
            getSpeciesSuccess({ count, species: results })
          ),
          catchError((error) => of(getSpeciesFail({ error })))
        )
      )
    )
  );

  getStarships$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getStarships),
      switchMap(({ pageIndex }) =>
        from(this.documentsSer.getStarships(pageIndex)).pipe(
          map(({ count, results }) =>
            getStarshipsSuccess({ count, starships: results })
          ),
          catchError((error) => of(getStarshipsFail({ error })))
        )
      )
    )
  );

  getVehicles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getVehicles),
      switchMap(({ pageIndex }) =>
        from(this.documentsSer.getVehicles(pageIndex)).pipe(
          map(({ count, results }) =>
            getVehiclesSuccess({ count, vehicles: results })
          ),
          catchError((error) => of(getVehiclesFail({ error })))
        )
      )
    )
  );
}
