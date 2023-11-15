import { Component } from '@angular/core';
import { Vehicle } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getVehicles, vehiclesSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss'],
})
export class VehiclesComponent {
  vehicles!: Vehicle[];
  count!: number;
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private vehiclesSubscription!: Subscription;
  private vehicles$ = this.store.select(vehiclesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetVehicles(1);
    this.vehiclesSubscription = this.vehicles$.subscribe(
      ({ vehicles, count, status, error }) => {
        this.vehicles = vehicles;
        this.count = count;
        this.status = status;
        this.error = error;
      }
    );
  }

  paginationHandler({ pageIndex }: PageEvent) {
    this.dispatchGetVehicles(pageIndex + 1);
  }

  dispatchGetVehicles(pageIndex: number) {
    this.store.dispatch(getVehicles({ pageIndex }));
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
