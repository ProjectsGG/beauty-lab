import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaProducts } from '../interfaces/shopify';
import { HeroService } from './hero.service';


@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor( private http: HttpClient,  private hero: HeroService) { }


  getProdcutsShop() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
      })
    };
    return this.http.get(`/admin/api/2020-01/collections/173830930491/products.json`, httpOptions);
  }
}
