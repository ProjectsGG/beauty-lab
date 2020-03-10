import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

  public plans: any[];
 
  constructor(
    private http: HttpClient,
    public hero: HeroService,
    private router: Router
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
      console.log(this.plans);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/plans`;
    return this.http.get(url, this.httpOptions);
  }

  getDetail( plans ) {
    console.log(plans);
    localStorage.setItem('plans', JSON.stringify(plans));
    this.router.navigate(['/plans-detail']);
  }




}
