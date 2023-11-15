import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { basicUrl } from '../constants';
import { HttpResponseType, Movie } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getMovies(): Observable<HttpResponseType<Movie>> {
    return this.http.get<HttpResponseType<Movie>>(`${basicUrl}/films`);
  }
}
