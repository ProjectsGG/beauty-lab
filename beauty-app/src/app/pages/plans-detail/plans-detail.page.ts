import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';


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
    private router: Router
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };
  ngOnInit() {
    this.getPlan();
  }
  getPlan() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
    this.hero.dataPurchase.plans.push(this.plans);
    console.log(this.hero.dataPurchase);
    this.getRoom(this.plans.id_habitacion);
  }
  getRoom(id) {
    this.getService(id)
    .subscribe((model: any) => {
      this.rooms = model.data;
      this.room = this.rooms[0];
    });
  }
  getService(id) {
    const url = `${this.hero.getUrl()}/room/` + id;
    return this.http.get(url, this.httpOptions);
  }
  payWithPaypal() {
    console.log('Pay!!!!!!');
    this.payPal.init({
      PayPalEnvironmentProduction: 'ARWrJ5pdmpzKphRRLPijQKobEXbgnqV19iWT_kSSGR8HyRnTxcNAYLFxvN4CwtsDEI6aVqUpOt1QW3BE',
      PayPalEnvironmentSandbox: 'sb-c6oa43982474@business.example.com'
    }).then(() => {
      // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
      this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      })).then(() => {
        const payment = new PayPalPayment(
          this.paymentAmount, this.currency, this.plans.nombre, 'sale beauty lab ' + this.plans.nombre);
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log('respuesta : ', res);
          this.toastr.success('Successful payment');
        }, () => {
          this.toastr.error('Error or render dialog closed without being successful');
        });
      }, () => {
       this.toastr.error('Error in the configuration the PayPal');
      });
    }, () => {
      this.toastr.error('Paypal initialization failed');
    });
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
