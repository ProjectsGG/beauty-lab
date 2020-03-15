import { HeroService } from './../../services/hero.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  products: any[];

  constructor(
    private hero: HeroService,
    private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  ngOnInit(){ };

  ionViewDidEnter(){
    this.getProducts();
  }

  getProducts() {
    this.getService()
    .subscribe((model: any) => {
      const myArrStr = JSON.stringify(model.products);
      this.products = JSON.parse(myArrStr);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/products`;
    return this.http.get(url, this.httpOptions);
  }

}
