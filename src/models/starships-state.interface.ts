import { HttpErrorResponse } from '@angular/common/http';
import { Starship } from './starship.interface';
import { HttpStatus } from '../constants';

export interface StarshipsState {
  starships: Starship[];
  count: number;
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
