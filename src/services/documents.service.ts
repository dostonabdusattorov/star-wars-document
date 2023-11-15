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

  getPeople(): Observable<HttpResponseType<Person>> {
    return this.http.get<HttpResponseType<Person>>(`${basicUrl}/people`);
  }

  getPlanets(): Observable<HttpResponseType<Planet>> {
    return this.http.get<HttpResponseType<Planet>>(`${basicUrl}/planets`);
  }

  getSpecies(): Observable<HttpResponseType<Species>> {
    return this.http.get<HttpResponseType<Species>>(`${basicUrl}/species`);
  }

  getStarships(): Observable<HttpResponseType<Starship>> {
    return this.http.get<HttpResponseType<Starship>>(`${basicUrl}/starships`);
  }

  getVehicles(): Observable<HttpResponseType<Vehicle>> {
    return this.http.get<HttpResponseType<Vehicle>>(`${basicUrl}/vehicles`);
  }
}
