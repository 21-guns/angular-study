import { Injectable } from '@angular/core';
import { Hero } from '../hero-detail/hero'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroServiceService {

  private heroerUrl = "api/heroes";
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroerUrl).toPromise().then(response => response.json().data as Hero[]).catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroerUrl}/${id}`;
    return this.http.get(url)
      .toPromise().then(response => response.json().data as Hero).catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error)
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroerUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  createHero(name: string): Promise<Hero>{
    return this.http.post(this.heroerUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise().then(res => res.json().data as Hero).catch(this.handleError)
  }

  deleteHero(id: number): Promise<void> {
    const url = `${this.heroerUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise().then(() => null).catch(this.handleError)
  }
}
