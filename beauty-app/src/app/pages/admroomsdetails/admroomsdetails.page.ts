import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admroomsdetails',
  templateUrl: './admroomsdetails.page.html',
  styleUrls: ['./admroomsdetails.page.scss'],
})
export class AdmroomsdetailsPage implements OnInit {

  public rooms: any[];

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
    this.getRooms();
  }

  getRooms() {
    this.getService()
    .subscribe((model: any) => {
      this.rooms = model.data;
      console.log(this.rooms);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/rooms`;
    return this.http.get(url, this.httpOptions);
  }

}
