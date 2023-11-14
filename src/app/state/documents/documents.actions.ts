import { createAction, props } from '@ngrx/store';

export const getPeople = createAction('[Documents] Get People');
export const getPeopleSuccess = createAction(
  '[Documents] Get People Success',
  props
);
export const getPeopleFail = createAction('[Documents] Get People Fail', props);

export const getPlanets = createAction('[Documents] Get Planets');
export const getPlanetsSuccess = createAction(
  '[Documents] Get Planets Success',
  props
);
export const getPlanetsFail = createAction(
  '[Documents] Get Planets Fail',
  props
);

export const getSpecies = createAction('[Documents] Get Species');
export const getSpeciesSuccess = createAction(
  '[Documents] Get Species Success',
  props
);
export const getSpeciesFail = createAction(
  '[Documents] Get Species Fail',
  props
);

export const getStarships = createAction('[Documents] Get Starships');
export const getStarshipsSuccess = createAction(
  '[Documents] Get Starships Success',
  props
);
export const getStarshipsFail = createAction(
  '[Documents] Get Starships Fail',
  props
);

export const getVehicles = createAction('[Documents] Get Vehicles');
export const getVehiclesSuccess = createAction(
  '[Documents] Get Vehicles Success',
  props
);
export const getVehiclesFail = createAction(
  '[Documents] Get Vehicles Fail',
  props
);
