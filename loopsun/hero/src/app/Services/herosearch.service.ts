import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from  'rxjs/Observable'
import 'rxjs/add/operator/map'

import { Hero } from '../hero-detail/hero'

@Injectable()
export class HerosearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`app/heroes/?name=${term}`).map(res => res.json().data as Hero[])
  }

}
