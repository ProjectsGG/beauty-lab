import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-plans',
  templateUrl: './plans-detail.page.html',
  styleUrls: ['./plans-detail.page.scss'],
})
export class PlansDetailPage implements OnInit {
  date: any;
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
    this.styleCalendar();
  }
  getPlan() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
    this.hero.dataPurchase.plans.push(this.plans);
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
    this.router.navigate(['/plans']);
  }
  nextStep() {
    if (this.date === undefined) {
      this.toastr.error('Select a date');
    } else {
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
