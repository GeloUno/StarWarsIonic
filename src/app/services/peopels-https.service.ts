import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Peoples } from '../model/peoples';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopelsHttpsService {
  urlBase: string = 'https://swapi.co/api/people';
  constructor(private httpClient: HttpClient) {}
  getPostAll(): Observable<Array<Peoples>> {
    return this.httpClient.get<Array<Peoples>>(this.urlBase);
  }
  setNextUrl(paramUrl) {
    return this.urlBase = paramUrl;
  }
  setPreviousUrl(paramUrl) {
    return this.urlBase = paramUrl;
  }
}
