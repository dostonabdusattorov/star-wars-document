import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { basicUrl } from '../constants';
import {
  HttpResponseType,
  Person,
  Planet,
  Species,
  Starship,
  Vehicle,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  constructor(private http: HttpClient) {}

  getPeople(pageIndex: number): Observable<HttpResponseType<Person>> {
    return this.http.get<HttpResponseType<Person>>(
      `${basicUrl}/people?page=${pageIndex}`
    );
  }

  getPlanets(pageIndex: number): Observable<HttpResponseType<Planet>> {
    return this.http.get<HttpResponseType<Planet>>(
      `${basicUrl}/planets?page=${pageIndex}`
    );
  }

  getSpecies(pageIndex: number): Observable<HttpResponseType<Species>> {
    return this.http.get<HttpResponseType<Species>>(
      `${basicUrl}/species?page=${pageIndex}`
    );
  }

  getStarships(pageIndex: number): Observable<HttpResponseType<Starship>> {
    return this.http.get<HttpResponseType<Starship>>(
      `${basicUrl}/starships?page=${pageIndex}`
    );
  }

  getVehicles(pageIndex: number): Observable<HttpResponseType<Vehicle>> {
    return this.http.get<HttpResponseType<Vehicle>>(
      `${basicUrl}/vehicles?page=${pageIndex}`
    );
  }
}
