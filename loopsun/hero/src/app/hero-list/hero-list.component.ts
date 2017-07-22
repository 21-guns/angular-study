import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero-detail/hero'
import { HeroServiceService } from '../Services/hero-service.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
})
export class HeroListComponent implements OnInit{
  title = 'Tour of Heros!';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private heroService: HeroServiceService,
    private router: Router
  ){
  }


  getHeros(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  ngOnInit(): void {
        this.getHeros();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
      this.router.navigate(['detail', this.selectedHero.id]);
  }

  add(name: string): void {
      name = name.trim();
      if (!name) {return ;}
      this.heroService.createHero(name).then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      })
  }

  delete(hero: Hero): void {
      this.heroService.deleteHero(hero.id)
        .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero){this.selectedHero = null;}
        })
  }
}

