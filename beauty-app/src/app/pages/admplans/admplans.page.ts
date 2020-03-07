import { UtilsService } from './../../utils/utils.service';
import { Plans } from './../../model/Plans';
import { RoomsType } from './../../model/RoomsType';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admplans',
  templateUrl: './admplans.page.html',
  styleUrls: ['./admplans.page.scss'],
})
export class AdmplansPage implements OnInit {

  planes: Plans = new Plans();
  roomsType: RoomsType = new RoomsType();
  roomsTypeList: RoomsType[];
  data: any = null;


  constructor(
    private http: HttpClient,
    private hero: HeroService,
    private utils: UtilsService
  ) {
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
    this.getRoomsType();
  }


  savePlans() {
    console.log(this.planes);
    this.addPlans(this.planes)
    .subscribe((model: any) => {
      console.log(model.data);
      this.planes  = new Plans();
      this.utils.showToast('Regitro almacenado correctamente');
    });
  }

  addPlans( planes: Plans ){
    const url = `${this.hero.getUrl()}/plan`;
    return this.http.post<Plans>(url, planes, this.httpOptions);
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

  change($event) {
    if($event == 'a') {
      this.data = null;
    }
  }


}
