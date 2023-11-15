import { Component } from '@angular/core';
import { Starship } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getStarships, starshipsSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.scss'],
})
export class StarshipsComponent {
  starships!: Starship[];
  count!: number;
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private starshipsSubscription!: Subscription;
  private starships$ = this.store.select(starshipsSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetStarships(1);
    this.starshipsSubscription = this.starships$.subscribe(
      ({ starships, count, status, error }) => {
        this.starships = starships;
        this.count = count;
        this.status = status;
        this.error = error;
      }
    );
  }

  paginationHandler({ pageIndex }: PageEvent) {
    this.dispatchGetStarships(pageIndex + 1);
  }

  dispatchGetStarships(pageIndex: number) {
    this.store.dispatch(getStarships({ pageIndex }));
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
