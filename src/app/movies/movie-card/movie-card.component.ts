import { Component, Input } from '@angular/core';
import { Movie } from '../../../models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  get getProperDate(): string {
    const date = new Date(this.movie.release_date);
    return `${date.getDate()} ${date.toLocaleString('default', {
      month: 'long',
    })}, ${date.getFullYear()}`;
  }
}
