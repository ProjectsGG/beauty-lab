import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admreservas',
  templateUrl: './admreservas.page.html',
  styleUrls: ['./admreservas.page.scss'],
})
export class AdmreservasPage implements OnInit {

  public reservations: any[];
  constructor(
    private http: HttpClient,
    private hero: HeroService,
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
