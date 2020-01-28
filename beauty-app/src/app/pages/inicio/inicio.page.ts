import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(
    public menuCtrl: MenuController,
    private location: Location,
    private hero: HeroService) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
   }

  ngOnInit() {
    if (this.hero.auth === true) {
      this.location.back();
    }
  }

}
