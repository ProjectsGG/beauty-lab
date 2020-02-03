import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
@Component({
  selector: 'app-car-shop',
  templateUrl: './car-shop.page.html',
  styleUrls: ['./car-shop.page.scss'],
})
export class CarShopPage implements OnInit {

  constructor(private payPal: PayPal) {

  }
  paymentAmount = '3.33';
  currency = 'USD';
  currencyIcon = '$';

  ngOnInit() {

  }
  payWithPaypal() {
    console.log('Pay ????');
    this.payPal.init({
      PayPalEnvironmentProduction: 'ARWrJ5pdmpzKphRRLPijQKobEXbgnqV19iWT_kSSGR8HyRnTxcNAYLFxvN4CwtsDEI6aVqUpOt1QW3BE',
      PayPalEnvironmentSandbox: 'sb-c6oa43982474@business.example.com'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
        // Only needed if you get an 'Internal Service Error' after PayPal login!
        //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
      })).then(() => {
        let payment = new PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log(res);
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
        }, () => {
          // Error or render dialog closed without being successful
        });
      }, () => {
        // Error in configuration
      });
    }, () => {
      // Error in initialization, maybe PayPal isn't supported or something else
    });
  }
}
