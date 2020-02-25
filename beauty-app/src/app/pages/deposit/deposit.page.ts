import { Component, OnInit } from '@angular/core';
import {
  PayPal,
  PayPalPayment,
  PayPalConfiguration
} from '@ionic-native/paypal/ngx';
import { ToastService } from '../../services/toast.service';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss']
})
export class DepositPage implements OnInit {
  constructor(private payPal: PayPal, public toastr: ToastService, public hero: HeroService, private router: Router) {}
  paymentAmount = '1.00';
  currency = 'USD';
  currencyIcon = '$';
  room: any;
  public plans: any;
  ngOnInit() {
    if (this.hero.dataPurchase.procedures.length > 0 || this.hero.dataPurchase.plans.length > 0) {
      this.room = this.hero.dataPurchase.room;
    } else {
      this.router.navigate(['/tabs/home']);
    }
  }
  cancel() {
    this.hero.dataPurchase = {
      procedures: [],
      plans: [],
      room: null,
      date: null,
      ok: false
    };
    this.router.navigate(['/tabs/home']);
  }

  getPlan() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
    this.hero.dataPurchase.plans.push(this.plans);
  }

  payWithPaypal() {
    this.payPal
      .init({
        PayPalEnvironmentProduction: 'AQmvJTc1hXdzjdvLoVVpL-EknSt-rLFORKzt6E2QseffRZigqd2wFGTAlz-yl--BDlXqxuuMmKTDVk4w',
        PayPalEnvironmentSandbox: 'Ae2Jz-_zB0fS_boKQr7kY9MZwla__TVt_vLAwhEWeCFnYmUV7wpfJOYfUgpGNggGty2QEvclkxqdaYVL'
      })
      .then(
        () => {
          // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
          this.payPal
            .prepareToRender(
              'PayPalEnvironmentProduction',
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
                    this.toastr.success('Successful payment');
                    // Successfully paid

                    // Example sandbox response
                    //
                    // {
                    //   'client': {
                    //     'environment': 'sandbox',
                    //     'product_name': 'PayPal iOS SDK',
                    //     'paypal_sdk_version': '2.16.0',
                    //     'platform': 'iOS'
                    //   },
                    //   'response_type': 'payment',
                    //   'response': {
                    //     'id': 'PAY-1AB23456CD789012EF34GHIJ',
                    //     'state': 'approved',
                    //     'create_time': '2016-10-03T13:33:33Z',
                    //     'intent': 'sale'
                    //   }
                    // }
                  },
                  () => {
                    // Error or render dialog closed without being successful
                  }
                );
              },
              () => {
                this.toastr.error('Error in the configuration the PayPal');
                // Error in configuration
              }
            );
        },
        () => {
          this.toastr.error('Paypal initialization failed');
          // Error in initialization, maybe PayPal isn't supported or something else
        }
      );
  }
}
