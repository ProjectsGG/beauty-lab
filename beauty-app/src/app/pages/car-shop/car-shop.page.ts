import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.page.html',
  styleUrls: ['./car-shop.page.scss'],
})
export class CarShopPage implements OnInit {

  constructor(private hero: HeroService) {}
  ngOnInit() {
    console.log(this.hero.shoppingcart);
  }
}
