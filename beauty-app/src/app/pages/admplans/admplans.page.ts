import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';


@Component({
  selector: 'app-admplans',
  templateUrl: './admplans.page.html',
  styleUrls: ['./admplans.page.scss'],
})
export class AdmplansPage implements OnInit {

  form: FormGroup;
  submitted = false;
  roomsType: any[];

  constructor(
    private http: HttpClient,
    private hero: HeroService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
        nombre: ['', Validators.required],
        descripcion: ['', Validators.required],
        valor: ['', Validators.required],
        idRoomType: ['', Validators.required]
      });
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

    // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  savePlans( values ) {
    console.log(values);
    console.log('Select :' + this.form.get('idRoomType').value);
    values.id_habitacion = 1;
    this.getPostService(values)
    .subscribe((model: any) => {
      console.log(model.data);
    });
  }

  getRoomsType() {
    this.getService()
    .subscribe((model: any) => {
      this.roomsType = model.data;
      console.log(this.roomsType);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/roomstype`;
    return this.http.get(url, this.httpOptions);
  }

  getPostService( values ) {
    const url = `${this.hero.getUrl()}/plans`;
    return this.http.post(url, values);
  }

}
