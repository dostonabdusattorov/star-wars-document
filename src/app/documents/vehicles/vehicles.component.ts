import { Component } from '@angular/core';
import { Vehicle } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getVehicles, vehiclesSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  vehicles!: Vehicle[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private vehiclesSubscription!: Subscription;
  private vehicles$ = this.store.select(vehiclesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetVehicles();
    this.vehiclesSubscription = this.vehicles$.subscribe(
      ({ vehicles, status, error }) => {
        this.vehicles = vehicles;
        this.status = status;
        this.error = error;
      }
    );
  }

  dispatchGetVehicles() {
    this.store.dispatch(getVehicles());
  }

  get getIsLoading(): boolean {
    return this.status === HttpStatus.LOADING;
  }

  get getIsSuccess(): boolean {
    return this.status === HttpStatus.SUCCESS;
  }

  get getIsFail(): boolean {
    return this.status === HttpStatus.ERROR;
  }

  getSearchedVehicles(): Vehicle[] {
    return getSearchedItems<Vehicle>(this.vehicles, this.searchText);
  }

  ngOnDestroy(): void {
    this.vehiclesSubscription.unsubscribe();
  }
}
