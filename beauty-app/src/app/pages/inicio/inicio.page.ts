import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss']
})
export class InicioPage implements OnInit {
  loginDetails: any;
  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private location: Location,
    private hero: HeroService,
    private screenOrientation: ScreenOrientation
  ) {}

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
    // screen.orientation.lock('landscape');
  }


  ngOnInit() {
    if (this.hero.auth === true) {
      // this.location.back();
      this.router.navigate(['/tabs/home']);
    }
  }
}
