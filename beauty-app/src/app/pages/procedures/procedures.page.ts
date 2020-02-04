import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HeroService } from './../../services/hero.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit {

  public procedures: any[];

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
    this.getProcedures();
  }

  getProcedures() {
    this.getService()
    .subscribe((model: any) => {
      this.procedures = model.data;
    });
  }


  getService() {
    const url = `${this.hero.getUrl()}/procedures`;
    return this.http.get(url, this.httpOptions);
  }

}
