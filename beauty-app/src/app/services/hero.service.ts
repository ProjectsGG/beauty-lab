import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: any = 'http://192.168.0.15:8000/api';
  private token: string = null;
  private user: User;
  public auth = false;
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
  getUser() {
    return this.user;
  }
  getAuth() {
    return this.auth;
  }
  validateSession() {
    const token = localStorage.getItem('token');
    if ( token === null || token === undefined) {
      this.router.navigate(['/inicio']);
    } else {
      console.log(token);
      this.token = token;
      this.user = JSON.parse(localStorage.getItem('user'));
      this.auth = true;
    }
  }
  logout() {
    localStorage.clear();

    this.token = null;
    this.user = null;
    this.auth = false;

    this.validateSession();
  }
}
