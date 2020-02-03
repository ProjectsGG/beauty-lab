import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  public plans: any[];

  constructor(
    private http: HttpClient,
    private hero: HeroService
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
    this.getService()
    .subscribe((model: any) => {
      this.plans = model.data;
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/plans`;
    return this.http.get(url, this.httpOptions);
  }


}
