import { HttpErrorResponse } from '@angular/common/http';
import { Species } from './species.interface';
import { HttpStatus } from '../constants';

export interface SpeciesState {
  species: Species[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
