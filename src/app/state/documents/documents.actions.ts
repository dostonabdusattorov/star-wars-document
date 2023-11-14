import { createAction, props } from '@ngrx/store';
import { Person, Planet, Species, Starship, Vehicle } from '../../../models';
import { HttpErrorResponse } from '@angular/common/http';

export const getPeople = createAction('[Documents] Get People');
export const getPeopleSuccess = createAction(
  '[Documents] Get People Success',
  props<{ people: Person[] }>()
);
export const getPeopleFail = createAction(
  '[Documents] Get People Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getPlanets = createAction('[Documents] Get Planets');
export const getPlanetsSuccess = createAction(
  '[Documents] Get Planets Success',
  props<{ planets: Planet[] }>()
);
export const getPlanetsFail = createAction(
  '[Documents] Get Planets Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getSpecies = createAction('[Documents] Get Species');
export const getSpeciesSuccess = createAction(
  '[Documents] Get Species Success',
  props<{ species: Species[] }>()
);
export const getSpeciesFail = createAction(
  '[Documents] Get Species Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getStarships = createAction('[Documents] Get Starships');
export const getStarshipsSuccess = createAction(
  '[Documents] Get Starships Success',
  props<{ starships: Starship[] }>()
);
export const getStarshipsFail = createAction(
  '[Documents] Get Starships Fail',
  props<{ error: HttpErrorResponse }>()
);

export const getVehicles = createAction('[Documents] Get Vehicles');
export const getVehiclesSuccess = createAction(
  '[Documents] Get Vehicles Success',
  props<{ vehicles: Vehicle[] }>()
);
export const getVehiclesFail = createAction(
  '[Documents] Get Vehicles Fail',
  props<{ error: HttpErrorResponse }>()
);
