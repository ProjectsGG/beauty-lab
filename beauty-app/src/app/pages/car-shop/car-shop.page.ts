import { Component, OnInit } from '@angular/core';
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration
} from '@ionic-native/paypal/ngx';
import { HeroService } from '../../services/hero.service';
import { ReservationService } from '../../services/reservation.service';
import { ToastService } from '../../services/toast.service';
@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.page.html',
  styleUrls: ['./car-shop.page.scss']
})
export class CarShopPage implements OnInit {
  total = 0;
  constructor(private toastr: ToastService, public hero: HeroService, public service: ReservationService) {}
  ngOnInit() {
    this.calculateTotal();
  }
  delete(i: number) {
    this.hero.shoppingcart.splice(i, 1);
    localStorage.setItem(
      'shoppingcart',
      JSON.stringify(this.hero.shoppingcart)
    );
    this.calculateTotal();
  }
  calculateTotal() {
    this.hero.shoppingcart.forEach(e => {
      if (e.procedures.length > 0) {
        this.total = this.total + e.procedures[0].precio;
      } else if (e.plans.length > 0) {
        this.total = this.total + e.plans[0].valor;
      }
    });
  }
  payment() {
    this.service.saveShoppincart().subscribe((r: any) => {
      if (r.ok) {
        this.hero.shoppingcart = [];
        this.toastr.success(r.message);
      } else {
        this.toastr.error('An error has occurred');
      }
    });
  }
}
