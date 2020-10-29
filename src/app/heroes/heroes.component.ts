import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {
  /*  hero: Hero = {
      id: 1,
      name: 'Windstorm'
    };*/
  heroes: Hero[];


  constructor(private  heroService: HeroService,
  ) {}

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  // 生命周期钩子，用于放置初始化逻辑
  ngOnInit() {
    this.getHeroes();
  }
}
