import { Component } from '@angular/core';
import { Species } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getSpecies, speciesSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss'],
})
export class SpeciesComponent {
  species!: Species[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private speciesSubscription!: Subscription;
  private species$ = this.store.select(speciesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetSpecies();
    this.speciesSubscription = this.species$.subscribe(
      ({ species, status, error }) => {
        this.species = species;
        this.status = status;
        this.error = error;
      }
    );
  }

  dispatchGetSpecies() {
    this.store.dispatch(getSpecies());
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
