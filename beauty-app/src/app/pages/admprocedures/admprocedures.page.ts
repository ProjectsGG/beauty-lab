import { UtilsService } from './../../utils/utils.service';
import { HeroService } from './../../services/hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedures } from './../../model/Procedures';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-admprocedures',
  templateUrl: './admprocedures.page.html',
  styleUrls: ['./admprocedures.page.scss'],
})
export class AdmproceduresPage implements OnInit {

  procedures: Procedures = new Procedures();
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

  ngOnInit() {}

  saveProcedures() {
    console.log(this.procedures);
    if (!this.photoTaken || this.photoTaken == null || this.photoTaken === '' ){
      this.utils.showAlert('No se ha cargado una imagen');
      return;
    }
    this.procedures.imagen = this.photoTaken;
    this.addProcedure(this.procedures)
    .subscribe((model: any) => {
      console.log(model.data);
      this.procedures  = new Procedures();
      this.photoTaken = '';
      this.utils.showToast('Regitro almacenado correctamente');
    });
  }

  addProcedure( procedures: Procedures ){
    const url = `${this.hero.getUrl()}/procedure`;
    return this.http.post<Procedures>(url, procedures, this.httpOptions);
  }

  change($event) {
    if ($event === 'a') {
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
