import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { trigger, state, style, animate, transition } from '@angular/animations';

import { Hero } from './hero'; 

@Component({
  selector: 'page-herolist',
  
  /*
  template: `
  <h1>{{title}}</h1> 
 
  <p> the sum of 1 + 1 is {{1 + 1}}</p>
  <h2>My favorite hero is: {{myHero.name}}</h2> 
  <p> Heroes: </p>
  <ul>
    <li *ngFor="let hero of heroes"
      [@heroState]="hero.state"
      (click)="hero.toggleState()">
      {{ hero.name }}
    </li>
  </ul>
  <p *ngIf="heroes.length > 3"> There are many heroes! </p>
  `,

*/
  templateUrl: 'herolist.html',

  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ])
    ])
  ]
})

export class HerolistPage {
  title = 'Tour of Heroes';
  heroes = [
    new Hero(1, 'Windstorm'),
    new Hero(13, 'Bombasto'),
    new Hero(15, 'Magneta'),
    new Hero(20, 'Tornado')
  ];
  myHero = this.heroes[0];


  
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HerolistPage');
  }
 
}
