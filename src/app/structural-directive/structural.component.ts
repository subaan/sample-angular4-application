import { Component } from '@angular/core';

import { Hero } from './../hero';
import {HEROES} from './../mock-heroes';

@Component({
  selector: 'app-structural-component',
  templateUrl: './structural.component.html',
  styleUrls: [ './../app.component.css' ]
})
export class StructuralComponent {
  heroes = HEROES;
  hero = this.heroes[0];

  condition = false;
  logs: string[] = [];
  showSad = true;
  status = 'ready';

  trackById(index: number, hero: Hero): number { return hero.id; }
}
