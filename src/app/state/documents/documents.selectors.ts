import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { DocumentsState } from '../../../models';

export const selectDocuments = (state: AppState) => state.documents;

export const peopleSelector = createSelector(
  selectDocuments,
  (state: DocumentsState) => state.people
);

export const planetsSelector = createSelector(
  selectDocuments,
  (state: DocumentsState) => state.planets
);

export const speciesSelector = createSelector(
  selectDocuments,
  (state: DocumentsState) => state.species
);

export const starshipsSelector = createSelector(
  selectDocuments,
  (state: DocumentsState) => state.starships
);

export const vehiclesSelector = createSelector(
  selectDocuments,
  (state: DocumentsState) => state.vehicles
);
