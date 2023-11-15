import { Component } from '@angular/core';
import { Species } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getSpecies, speciesSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
})
export class SpeciesComponent {
  species!: Species[];
  count!: number;
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private speciesSubscription!: Subscription;
  private species$ = this.store.select(speciesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetSpecies(1);
    this.speciesSubscription = this.species$.subscribe(
      ({ species, count, status, error }) => {
        this.species = species;
        this.count = count;
        this.status = status;
        this.error = error;
      }
    );
  }

  paginationHandler({ pageIndex }: PageEvent) {
    this.dispatchGetSpecies(pageIndex + 1);
  }

  dispatchGetSpecies(pageIndex: number) {
    this.store.dispatch(getSpecies({ pageIndex }));
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

  getSearchedSpecies(): Species[] {
    return getSearchedItems<Species>(this.species, this.searchText);
  }

  ngOnDestroy(): void {
    this.speciesSubscription.unsubscribe();
  }
}
