import { Component } from '@angular/core';
import { Hero } from 'src/app/hero';
import { ServiceService } from '../service.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']

})
export class HeroesComponent {
  // input:string=prompt("What is your name?") as string;

  heroes: Hero[]=[];

  constructor(private serviceService:ServiceService, private msgServicehero : MessageService){

  }

  ngOnInit(): void{
    this.getHeroesinComponent();
  }

  getHeroesinComponent(): void {
    this.serviceService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.serviceService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.serviceService.deleteHero(hero.id).subscribe();
  }
 

}
