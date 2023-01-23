import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private service: ServiceService ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.service.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}