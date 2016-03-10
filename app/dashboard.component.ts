import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import { Router } from 'angular2/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];
  
    constructor(
            private _heroService: HeroService,
            private _router: Router
        ) { }
    ngOnInit() {
        this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }
  
    gotoDetail(hero: Hero){ 
        let l = ['HeroDetail', {id: hero.id} ];
        this._router.navigate(l);
    }
}

