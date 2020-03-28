import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admreservas-detail',
  templateUrl: './admreservas-detail.page.html',
  styleUrls: ['./admreservas-detail.page.scss'],
})
export class AdmreservasDetailPage implements OnInit {

  public reservation: any;
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
    this.reservation = JSON.parse(localStorage.getItem('reserva'));
  }

}
