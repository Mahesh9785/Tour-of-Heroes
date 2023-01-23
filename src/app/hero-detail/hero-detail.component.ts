import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  hero: Hero | undefined;

  constructor(
    private route: ActivatedRoute,
    private heroDetailService: ServiceService,
    private location: Location
  ) {}

ngOnInit(): void {
  this.getHeroInDetailComponent();
}

getHeroInDetailComponent(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));
  this.heroDetailService.getHerofromService(id)
    .subscribe(hero => this.hero = hero);
}

goBack(): void {
  this.location.back();
}

save(): void {
  if (this.hero) {
    this.heroDetailService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}



}


