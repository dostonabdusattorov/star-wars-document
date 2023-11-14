import { DocumentsState, MoviesState } from '../../models';

export interface AppState {
  movies: MoviesState;
  documents: DocumentsState;
}
