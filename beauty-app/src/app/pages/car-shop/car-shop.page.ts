import { Component, OnInit } from '@angular/core';
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration
} from '@ionic-native/paypal/ngx';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.page.html',
  styleUrls: ['./car-shop.page.scss']
})
export class CarShopPage implements OnInit {
  total = 0;
  constructor(public hero: HeroService) {}
  ngOnInit() {
    this.hero.shoppingcart.forEach(e => {
      if (e.procedures.length > 0) {
        this.total = this.total + e.procedures[0].precio;
      } else if (e.plans.length > 0) {
        this.total = this.total + e.plans[0].valor;
      }
    });
  }
  delete(i: number) {
    this.hero.shoppingcart.splice(i, 1);
    localStorage.setItem(
      'shoppingcart',
      JSON.stringify(this.hero.shoppingcart)
    );
  }
}
