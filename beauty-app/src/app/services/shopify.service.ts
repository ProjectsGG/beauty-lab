import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaProducts } from '../interfaces/shopify';
import { HeroService } from './hero.service';


@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor( private http: HttpClient,  private hero: HeroService) { }


  getProdcutsShop(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get<RespuestaProducts>(`https://844672ed6d0f31d8ad2fb844a0636e80:c4e4a2414eed48ff01f4355382e19bd3@beauty-lab-merch.myshopify.com/admin/api/2020-01/collections/173830930491/products.json`, httpOptions);
  }
}
