import { Component } from '@angular/core';
import { Starship } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getStarships, starshipsSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent {
  starships!: Starship[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private starshipsSubscription!: Subscription;
  private starships$ = this.store.select(starshipsSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetStarships();
    this.starshipsSubscription = this.starships$.subscribe(
      ({ starships, status, error }) => {
        this.starships = starships;
        this.status = status;
        this.error = error;
      }
    );
  }

  dispatchGetStarships() {
    this.store.dispatch(getStarships());
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

  getSearchedStarships(): Starship[] {
    return getSearchedItems<Starship>(this.starships, this.searchText);
  }

  ngOnDestroy(): void {
    this.starshipsSubscription.unsubscribe();
  }
}
