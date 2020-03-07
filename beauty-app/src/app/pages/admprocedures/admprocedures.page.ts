import { UtilsService } from './../../utils/utils.service';
import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedures } from './../../model/Procedures';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admprocedures',
  templateUrl: './admprocedures.page.html',
  styleUrls: ['./admprocedures.page.scss'],
})
export class AdmproceduresPage implements OnInit {

  procedures: Procedures = new Procedures();

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

  ngOnInit() {}

  saveProcedures() {
    console.log(this.procedures);
    this.addProcedure(this.procedures)
    .subscribe((model: any) => {
      console.log(model.data);
      this.procedures  = new Procedures();
      this.utils.showToast('Regitro almacenado correctamente');
    });
  }

  addProcedure( procedures: Procedures ){
    const url = `${this.hero.getUrl()}/procedure`;
    return this.http.post<Procedures>(url, procedures, this.httpOptions);
  }


}
