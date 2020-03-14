import { Component, OnInit } from '@angular/core';
import { ShopifyService } from 'src/app/services/shopify.service';
import { Product } from 'src/app/interfaces/shopify';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  products : Product[] = [];
  constructor(private shopifyService: ShopifyService) { }

  ngOnInit() {
    this.shopifyService.getProdcutsShop()
    .subscribe( resp =>{
      console.log('Productos', resp);
      this.products.push( ...resp.products );
    });
  }

}
