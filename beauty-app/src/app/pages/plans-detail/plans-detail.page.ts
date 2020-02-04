import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from '../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans-detail.page.html',
  styleUrls: ['./plans-detail.page.scss'],
})
export class PlansDetailPage implements OnInit {

  public plans: any;
  public rooms: any[];
  public room: any;

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
    this.getPlan();
  }

  getPlan() {
    this.plans = JSON.parse(localStorage.getItem('plans'));
    this.getRoom(this.plans.id_habitacion);
  }

  getRoom(id) {
    this.getService(id)
    .subscribe((model: any) => {
      console.log(model.data);
      this.rooms = model.data;
      this.room = this.rooms[0];
    });
  }

  getService(id) {
    const url = `${this.hero.getUrl()}/room/` + id;
    return this.http.get(url, this.httpOptions);
  }


}
