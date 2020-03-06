import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomsType } from './../../model/RoomsType';
import { Component, OnInit } from '@angular/core';
import { Rooms } from 'src/app/model/Rooms';

@Component({
  selector: 'app-admrooms',
  templateUrl: './admrooms.page.html',
  styleUrls: ['./admrooms.page.scss'],
})
export class AdmroomsPage implements OnInit {

  rooms: Rooms = new Rooms();
  roomsType: RoomsType = new RoomsType();
  roomsTypeList: RoomsType[];


  constructor(
    private http: HttpClient,
    private hero: HeroService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.rooms.roomsType = this.roomsType;
    this.getRoomsType();
  }

  getRoomsType() {
    this.getService()
    .subscribe((model: any) => {
      this.roomsTypeList = model.data;
      console.log(this.roomsTypeList);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/roomstype`;
    return this.http.get(url, this.httpOptions);
  }

  saveRoom() {
    console.log(this.rooms);
    this.addPlans(this.rooms)
    .subscribe((model: any) => {
      console.log(model.data);
    });
  }

  addPlans( rooms: Rooms ){
    const url = `${this.hero.getUrl()}/room`;
    return this.http.post<Rooms>(url, rooms, this.httpOptions);
  }

}
