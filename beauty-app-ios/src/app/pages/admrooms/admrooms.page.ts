import { UtilsService } from './../../utils/utils.service';
import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RoomsType } from './../../model/RoomsType';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
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
  data: any = null;
  photoTaken: string;

  @ViewChild('upload', { static: false }) fileInput: ElementRef;


  constructor(
    private http: HttpClient,
    private hero: HeroService,
    private utils: UtilsService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit() {
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
    if (!this.photoTaken || this.photoTaken == null || this.photoTaken === '' ){
      this.utils.showAlert('No se ha cargado una imagen');
      return;
    }
    this.rooms.imagen = this.photoTaken;
    this.addPlans(this.rooms)
    .subscribe((model: any) => {
      console.log(model.data);
      this.rooms  = new Rooms();
      this.photoTaken = '';
      this.utils.showToast('Regitro almacenado correctamente');

    });
  }

  addPlans( rooms: Rooms ){
    const url = `${this.hero.getUrl()}/room`;
    return this.http.post<Rooms>(url, rooms, this.httpOptions);
  }

  change($event) {
    if($event == 'a') {
      this.data = null;
    }
  }

  fileChange() {
    const reader = new FileReader();
    reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
    reader.onload = () => {
      this.photoTaken = reader.result.toString();
    };
  } 

  takeFile() {
    this.fileInput.nativeElement.click();
  }

}
