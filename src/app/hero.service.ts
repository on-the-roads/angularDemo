import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    // 在获取到英雄数组时发送一条消息
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // 这是一个典型的“服务中的服务”场景：
  // 你把 MessageService 注入到了 HeroService 中，而 HeroService 又被注入到了 HeroesComponent 中。
  constructor(private messageService: MessageService) {
  }
}
