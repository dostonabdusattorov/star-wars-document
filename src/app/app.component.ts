import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getMovies, moviesSelector } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private movies$ = this.store.select(moviesSelector);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(getMovies());
    this.movies$.subscribe((res) => console.log(res));
  }
}
