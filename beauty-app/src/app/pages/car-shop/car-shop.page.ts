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
  paymentAmount = '500.00';
  currency = 'USD';
  currencyIcon = '$';
  constructor(private payPal: PayPal, private toastr: ToastService, public hero: HeroService, public service: ReservationService) {}
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
  payWithPaypal() {
    this.payPal
      .init({
        PayPalEnvironmentProduction:
          'Aa5GzqbCccRgVikINEctQx5mZLUZl63wQjne9IY3NuguQK8DUU0OJjq0FGMUVUETrjqyYqQcypNA1QgN',
        PayPalEnvironmentSandbox:
          'Ae2Jz-_zB0fS_boKQr7kY9MZwla__TVt_vLAwhEWeCFnYmUV7wpfJOYfUgpGNggGty2QEvclkxqdaYVL'
      })
      .then(
        () => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal
            .prepareToRender(
              'PayPalEnvironmentSandbox',
              new PayPalConfiguration({
                // Only needed if you get an 'Internal Service Error' after PayPal login!
                // payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
              })
            )
            .then(
              () => {
                const payment = new PayPalPayment(
                  this.paymentAmount,
                  this.currency,
                  'Description',
                  'sale'
                );
                this.payPal.renderSinglePaymentUI(payment).then(
                  res => {
                    if (res.response.state === 'approved') {
                      this.toastr.success('Successful payment!');
                      this.payment();
                    } else {
                      this.toastr.light(
                        'Your payment has not been approved, try again or later',
                        '',
                        4000
                      );
                    }
                  },
                  () => {
                    this.toastr.light(
                      'Your payment has not been approved, try again or later',
                      '',
                      3000
                    );
                  }
                );
              },
              () => {
                this.toastr.error('Error in configuration', '', 3000);
              }
            );
        },
        () => {
          this.toastr.error('Paypal initialization failed');
        }
      );
  }
  payment() {
    this.service.saveShoppincart().subscribe((r: any) => {
      if (r.ok) {
        this.hero.clearShoppingCart();
      } else {
        this.toastr.error('An error has occurred');
      }
    });
  }
}
