import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaProducts } from '../interfaces/shopify';
import { HeroService } from './hero.service';
import { environment } from 'src/environments/environment';


const apikey = environment.apikey;
const apiPass = environment.apiPass;

@Injectable({
  providedIn: 'root'
})
export class ShopifyService {

  constructor( private http: HttpClient,  private hero: HeroService) { }


  getProdcutsShop(){
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Shopify-Storefront-Access-Token': '981fa8d8ae8f586057eac1318fe9a2f1'
      })
    };
    return this.http.get<RespuestaProducts>(`https://844672ed6d0f31d8ad2fb844a0636e80:c4e4a2414eed48ff01f4355382e19bd3@beauty-lab-merch.myshopify.com/admin/api/2020-01/collections/173830930491/products.json`, httpOptions);
  }
}
