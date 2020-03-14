import { Product } from './../interfaces/shopify';
import { retry, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HeroService } from './hero.service';


@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  products : Product[] = [];

  constructor( private http: HttpClient,  private hero: HeroService) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  getProducts() {
    this.getService()
    .subscribe((model: any) => {
      this.products = model.data;
      console.log(this.products);
    });
  }

  getService() {
    const url = `${this.hero.getUrl()}/products`;
    return this.http.get(url, this.httpOptions);
  }


}
