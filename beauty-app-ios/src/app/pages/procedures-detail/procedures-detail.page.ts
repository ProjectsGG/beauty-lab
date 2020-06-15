import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal/ngx';
import { ToastService } from '../../services/toast.service';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures-detail.page.html',
  styleUrls: ['./procedures-detail.page.scss'],
})
export class ProceduresDetailPage implements OnInit {


  constructor(
    public modalCtrl: ModalController,
    private http: HttpClient,
    private hero: HeroService,
    private payPal: PayPal,
    public toastr: ToastService,
    private router: Router,
    private navCtrl: NavController
  ) {}
  date: any;
  type: 'string';
  data: any;
  public procedures: any;
  public rooms: any[];
  public room: any;

  public paymentAmount = '500';
  public currency = 'USD';
  public currencyIcon = '$';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getProcedure();
    this.styleCalendar();
  }
  getProcedure() {
    this.procedures = JSON.parse(localStorage.getItem('procedures'));
    this.hero.dataPurchase = {
      fecha_reserva: null,
      fecha_inicio: null,
      fecha_fin: null,
      procedures: [],
      plans: [],
      room: null,
      ok: false
    };
    this.hero.dataPurchase.procedures.push(this.procedures);
    this.getRoom(1);
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
  backStep() {
    this.hero.dataPurchase = {
      procedures: [],
      plans: [],
      fecha_reserva: null,
      fecha_inicio: null,
      fecha_fin: null,
      room: null,
      date: null,
      ok: false
    };
    this.router.navigate(['/procedures']);
  }
  nextStep() {
    if (this.date === undefined) {
      this.toastr.error('Select a date');
    } else {
      this.hero.action = '/procedures-detail';
      this.hero.dataPurchase.fecha_reserva = moment().format('YYYY-MM-DD');
      this.hero.dataPurchase.fecha_inicio = this.date.format('YYYY-MM-DD');
      this.hero.dataPurchase.fecha_fin = this.date.add(8, 'days').format('YYYY-MM-DD');
      this.router.navigate(['s-room']);
    }
  }
  styleCalendar() {
    const styleElem = document.head.appendChild(
      document.createElement('style')
    );

    // tslint:disable-next-line: max-line-length
    styleElem.innerHTML = `
                          .month-packer-item > button {
                            color: aliceblue !important;
                          }
                          .this-month > button {
                            border: 1px solid #fff !important;
                          }
                          .switch-btn{
                            color: aliceblue !important;
                          }
                          .transparent{
                            color: aliceblue !important;
                          }
                          button.on-selected{
                            background-color: #ff00e9 !important;
                          }
                          .days-btn {
                            background-color: #fae6fe !important;
                          }
                          button.today > p{
                            color: #000 !important;
                            font-weight: 1 !important;
                          }
                          button.on-selected > p{
                            color: aliceblue !important;
                          }
                          div.title > ion-button{
                            color: aliceblue !important;
                          }`;
  }
}
