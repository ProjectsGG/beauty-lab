import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: any = 'http://192.168.0.21:8000/api';
  private token: string = null;

  constructor(private storage: Storage, private router: Router) {}

  getUrl() {
    return this.url;
  }
  getToken() {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
  validateSession() {
    this.storage.get('token').then(response => {
      if (response === null) {
        this.router.navigate(['/inicio']);
      }
    });
  }
  logout() {
    this.storage.set('token', null);
    this.router.navigate(['/inicio']);
  }
}
