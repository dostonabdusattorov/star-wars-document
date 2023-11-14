import { HttpErrorResponse } from '@angular/common/http';
import { Planet } from './planet.interface';
import { HttpStatus } from '../constants';

export interface PlanetsState {
  planets: Planet[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
