import { HttpErrorResponse } from '@angular/common/http';
import { Person } from './person.interface';
import { HttpStatus } from '../constants';

export interface PeopleState {
  people: Person[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
