import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admplansdetails',
  templateUrl: './admplansdetails.page.html',
  styleUrls: ['./admplansdetails.page.scss'],
})
export class AdmplansdetailsPage implements OnInit {

  public plans: any[];

  constructor(
    private http: HttpClient,
    private hero: HeroService,
  ) { }

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

}
