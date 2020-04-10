import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicavailable',
  templateUrl: './medicavailable.page.html',
  styleUrls: ['./medicavailable.page.scss'],
})
export class MedicavailablePage implements OnInit {

  public reservations: any[];
  
  constructor(
    private http: HttpClient,
    public hero: HeroService,
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getReservations();
  }

  getReservations() {
    this.getService()
    .subscribe((model: any) => {
      this.reservations = model.data;
      console.log(this.reservations);
    });
  }


  getService() {
    const url = `${this.hero.getUrl()}/reversations`;
    return this.http.get(url, this.httpOptions);
  }

}
