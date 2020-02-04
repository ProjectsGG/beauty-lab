import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';
import { Location } from '@angular/common';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  loginDetails: any;
  constructor(
    private router: Router,
    public menuCtrl: MenuController,
    private location: Location,
    private hero: HeroService) { }

  ionViewWillEnter() {
  this.menuCtrl.enable(false);
   }

  //  Login() {
  //   this.googleplus.login({}).then((res) => {
  //     this.loginDetails = res;
  //   }, (err) => {
  //   });
  //  }

  //  Logout() {
  //   this.googleplus.logout();
  //   alert('Logged out');
  //  }

  ngOnInit() {
    if (this.hero.auth === true) {
      // this.location.back();
      this.router.navigate(['/tabs/home']);
    }
  }

}
