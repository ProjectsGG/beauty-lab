import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-plans',
  templateUrl: './plans-detail.page.html',
  styleUrls: ['./plans-detail.page.scss'],
})
export class PlansDetailPage implements OnInit {
  date: string;
  type: 'string';
  data: any;
  public plans: any;
  public rooms: any[];
  public room: any;

  public paymentAmount = '500';
  public currency = 'USD';
  public currencyIcon = '$';

  constructor(
    private http: HttpClient,
    private hero: HeroService,
    private payPal: PayPal,
    private toastr: ToastService,
    private router: Router,
    private navCtrl: NavController
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };
  ngOnInit() {
    this.getPlan();
    const styleElem = document.head.appendChild(
      document.createElement('style')
    );

    // tslint:disable-next-line: max-line-length
    styleElem.innerHTML = `button:disabled{
                            color: #a0a0a0 !important;
                          }
                          button.today > p{
                            color: #e900fc !important;
                          }`;
  }
  getPlan() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
    this.hero.dataPurchase.plans.push(this.plans);
  }
  getService(id) {
    const url = `${this.hero.getUrl()}/room/` + id;
    return this.http.get(url, this.httpOptions);
  }
  // payWithPaypal() {
  //   console.log('Pay!!!!!!');
  //   this.payPal.init({
  //     PayPalEnvironmentProduction: 'ARWrJ5pdmpzKphRRLPijQKobEXbgnqV19iWT_kSSGR8HyRnTxcNAYLFxvN4CwtsDEI6aVqUpOt1QW3BE',
  //     PayPalEnvironmentSandbox: 'sb-c6oa43982474@business.example.com'
  //   }).then(() => {
  //     // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  //     this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
  //     })).then(() => {
  //       const payment = new PayPalPayment(
  //         this.paymentAmount, this.currency, this.plans.nombre, 'sale beauty lab ' + this.plans.nombre);
  //       this.payPal.renderSinglePaymentUI(payment).then((res) => {
  //         console.log('respuesta : ', res);
  //         this.toastr.success('Successful payment');
  //       }, () => {
  //         this.toastr.error('Error or render dialog closed without being successful');
  //       });
  //     }, () => {
  //      this.toastr.error('Error in the configuration the PayPal');
  //     });
  //   }, () => {
  //     this.toastr.error('Paypal initialization failed');
  //   });
  // }
  backStep() {
    this.hero.dataPurchase.procedures.pop();
    this.navCtrl.back();
  }
  nextStep() {
    if (this.data === undefined) {
      this.toastr.error('Select a date');
    } else {
      this.hero.dataPurchase.date = this.data._d;
      this.router.navigate(['s-room']);
    }
  }

}
