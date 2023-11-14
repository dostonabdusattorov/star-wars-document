import { createReducer, on } from '@ngrx/store';
import { HttpStatus } from '../../../constants';
import { DocumentsState } from '../../../models';
import {
  getPeople,
  getPeopleFail,
  getPeopleSuccess,
  getSpecies,
  getSpeciesSuccess,
  getSpeciesFail,
  getPlanets,
  getPlanetsSuccess,
  getPlanetsFail,
  getStarships,
  getStarshipsSuccess,
  getStarshipsFail,
  getVehicles,
  getVehiclesFail,
  getVehiclesSuccess,
} from './documents.actions';

const initialState: DocumentsState = {
  people: {
    people: [],
    error: null,
    status: HttpStatus.PENDING,
  },
  planets: {
    planets: [],
    error: null,
    status: HttpStatus.PENDING,
  },
  species: {
    species: [],
    error: null,
    status: HttpStatus.PENDING,
  },
  starships: {
    starships: [],
    error: null,
    status: HttpStatus.PENDING,
  },
  vehicles: {
    vehicles: [],
    error: null,
    status: HttpStatus.PENDING,
  },
};

export const documentsReducer = createReducer(
  initialState,
  on(getPeople, (state) => ({
    ...state,
    people: { ...state.people, status: HttpStatus.LOADING },
  })),
  on(getPeopleSuccess, (state, { people }) => ({
    ...state,
    people: { ...state.people, people, status: HttpStatus.SUCCESS },
  })),
  on(getPeopleFail, (state, { error }) => ({
    ...state,
    people: { ...state.people, error, status: HttpStatus.ERROR },
  })),

  on(getPlanets, (state) => ({
    ...state,
    planets: { ...state.planets, status: HttpStatus.LOADING },
  })),
  on(getPlanetsSuccess, (state, { planets }) => ({
    ...state,
    planets: { ...state.planets, planets, status: HttpStatus.SUCCESS },
  })),
  on(getPlanetsFail, (state, { error }) => ({
    ...state,
    planets: { ...state.planets, error, status: HttpStatus.ERROR },
  })),

  on(getSpecies, (state) => ({
    ...state,
    species: { ...state.species, status: HttpStatus.LOADING },
  })),
  on(getSpeciesSuccess, (state, { species }) => ({
    ...state,
    species: { ...state.species, species, status: HttpStatus.SUCCESS },
  })),
  on(getSpeciesFail, (state, { error }) => ({
    ...state,
    species: { ...state.species, error, status: HttpStatus.ERROR },
  })),

  on(getStarships, (state) => ({
    ...state,
    starships: { ...state.starships, status: HttpStatus.LOADING },
  })),
  on(getStarshipsSuccess, (state, { starships }) => ({
    ...state,
    starships: { ...state.starships, starships, status: HttpStatus.SUCCESS },
  })),
  on(getStarshipsFail, (state, { error }) => ({
    ...state,
    starships: { ...state.starships, error, status: HttpStatus.ERROR },
  })),

  on(getVehicles, (state) => ({
    ...state,
    vehicles: { ...state.vehicles, status: HttpStatus.LOADING },
  })),
  on(getVehiclesSuccess, (state, { vehicles }) => ({
    ...state,
    vehicles: { ...state.vehicles, vehicles, status: HttpStatus.SUCCESS },
  })),
  on(getVehiclesFail, (state, { error }) => ({
    ...state,
    vehicles: { ...state.vehicles, error, status: HttpStatus.ERROR },
  }))
);
