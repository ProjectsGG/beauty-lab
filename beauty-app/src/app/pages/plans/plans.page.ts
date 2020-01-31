import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './../../services/toast.service';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

plans = [
  '3dplan.jpg',
  'bootyplan.jpg',
  'superplan.jpg'
];

  constructor(
    private http: HttpClient,
    private hero: HeroService,
    private toast: ToastService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.getPlanServices()
    .subscribe((r: any) => {
      if (r.ok) {
        console.log('response' + r);
      } else {
        this.toast.error(r.message);
      }
    });
  }

  getPlanServices() {
    const url = `${this.hero.getUrl()}/plans`;
    return this.http.get(url, this.httpOptions);
  }


}
