import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastService } from './../../services/toast.service';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { request } from 'http';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  public plans: any[];

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
    console.log('Inicio');
    this.getPlanServices()
    .subscribe((model: any) => {
      this.plans = model.data;
    });
  }

  getPlanServices() {
    const url = `${this.hero.getUrl()}/plans`;
    return this.http.get(url, this.httpOptions);
  }


}
