import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ToastService } from '../../services/toast.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures-detail.page.html',
  styleUrls: ['./procedures-detail.page.scss'],
})
export class ProceduresDetailPage implements OnInit {
  date: string;
  type: 'string';
  data: any;
  public procedures: any;
  public rooms: any[];
  public room: any;

  public paymentAmount = '500';
  public currency = 'USD';
  public currencyIcon = '$';


  constructor(
    public modalCtrl: ModalController,
    private http: HttpClient,
    private hero: HeroService,
    private payPal: PayPal,
    public toastr: ToastService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getProcedure();
  }

  getProcedure() {
    this.procedures = JSON.parse(localStorage.getItem('procedures'));
    this.getRoom(1);
  }

  getRoom(id) {
    this.getService(id)
    .subscribe((model: any) => {
      console.log(model.data);
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
          this.paymentAmount, this.currency, this.procedures.nombre, 'sale beauty lab ' + this.procedures.nombre);
        this.payPal.renderSinglePaymentUI(payment).then((res) => {
          console.log('respuesta : ',res);
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


}
