import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getMovies, moviesSelector } from '../state';
import { Subscription } from 'rxjs';
import { Movie } from '../../models';
import { HttpStatus } from '../../constants';
import { HttpErrorResponse } from '@angular/common/http';
import { getSearchedItems } from '../../utils';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {
  movies!: Movie[];
  status!: HttpStatus;
  error!: HttpErrorResponse | null;

  searchText = '';

  private moviesSubscription!: Subscription;
  private movies$ = this.store.select(moviesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.dispatchGetMovies();
    this.moviesSubscription = this.movies$.subscribe(
      ({ movies, status, error }) => {
        this.movies = movies;
        this.status = status;
        this.error = error;
        console.log(error);
      }
    );
  }

  dispatchGetMovies() {
    this.store.dispatch(getMovies());
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

  getSearchedMovies(): Movie[] {
    return getSearchedItems<Movie>(this.movies, this.searchText, 'title');
  }

  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
  }
}
