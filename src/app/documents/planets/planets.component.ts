import { Component } from '@angular/core';
import { Planet } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getPlanets, planetsSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss'],
})
export class PlanetsComponent {
  planets!: Planet[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private planetsSubscription!: Subscription;
  private planets$ = this.store.select(planetsSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetPlanets();
    this.planetsSubscription = this.planets$.subscribe(
      ({ planets, status, error }) => {
        this.planets = planets;
        this.status = status;
        this.error = error;
      }
    );
  }

  dispatchGetPlanets() {
    this.store.dispatch(getPlanets());
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

  getSearchedPlanets(): Planet[] {
    return getSearchedItems<Planet>(this.planets, this.searchText);
  }

  ngOnDestroy(): void {
    this.planetsSubscription.unsubscribe();
  }
}
