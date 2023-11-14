import { HttpErrorResponse } from '@angular/common/http';
import { Vehicle } from './vehicle.interface';
import { HttpStatus } from '../constants';

export interface VehiclesState {
  vehicles: Vehicle[];
  error: HttpErrorResponse | null;
  status: HttpStatus;
}
