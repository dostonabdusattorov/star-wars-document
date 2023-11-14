import { PeopleState } from './people-state.interface';
import { PlanetsState } from './planets-state.interface';
import { SpeciesState } from './species-state.interface';
import { StarshipsState } from './starships-state.interface';
import { VehiclesState } from './vehicles-state.interface';

export interface DocumentsState {
  people: PeopleState;
  planets: PlanetsState;
  species: SpeciesState;
  starships: StarshipsState;
  vehicles: VehiclesState;
}
