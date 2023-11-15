import { Component } from '@angular/core';
import { Person } from '../../../models';
import { HttpStatus } from '../../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { AppState, getPeople, peopleSelector } from '../../state';
import { Store } from '@ngrx/store';
import { getSearchedItems } from '../../../utils';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent {
  people!: Person[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private peopleSubscription!: Subscription;
  private people$ = this.store.select(peopleSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetPeople();
    this.peopleSubscription = this.people$.subscribe(
      ({ people, status, error }) => {
        this.people = people;
        this.status = status;
        this.error = error;
      }
    );
  }

  dispatchGetPeople() {
    this.store.dispatch(getPeople());
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

  getSearchedPeople(): Person[] {
    return getSearchedItems<Person>(this.people, this.searchText);
  }

  ngOnDestroy(): void {
    this.peopleSubscription.unsubscribe();
  }
}
