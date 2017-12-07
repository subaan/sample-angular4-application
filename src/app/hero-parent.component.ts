import { Component } from '@angular/core';
 
import { HEROES } from './mock-heroes';
 
@Component({
  selector: 'app-hero-parent',
  //One of the way 
//  template: `
//    <h2>{{master}} controls {{heroes.length}} heroes</h2>
//    <app-hero-child *ngFor="let hero of heroes"
//      [hero]="hero"
//      [masters]="master">
//    </app-hero-child>
//  `
  //2nd way
  template: `
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <div *ngFor="let hero of heroes">
        <h3>{{hero.name}} says:</h3>
        <p>I, {{hero.name}}, am at your service, {{master}}.</p>
    </div>
  `
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
