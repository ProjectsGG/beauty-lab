import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Purchase } from '../interfaces/purchase';
@Injectable({
  providedIn: 'root'
})
export class HeroService {


  // private url: any = 'http://18.228.226.191/api';
  private url: any = 'https://beautylab.app/api';
  private domain: any = 'https://beautylab.app';
  private token: string = null;
  private user: User = {
    img_perfil: null
  };
  public auth = false;

  public dataPurchase: Purchase = {
    user_id: '',
    procedures: [],
    plans: [],
    room: null,
    date: null,
    ok: false
  };
  constructor(private storage: Storage,  private router: Router, private http: HttpClient) {}

  getUrl() {
    return this.url;
  }
  getDomain() {
    return this.domain;
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
  setUser(user) {
    this.user = user;
  }
  getAuth() {
    return this.auth;
  }
  validateSession() {

    const token = localStorage.getItem('token');
    if ( token === null || token === undefined) {
      this.router.navigate(['/inicio']);
    } else {
      this.token = token;
      this.user = JSON.parse(localStorage.getItem('user'));
      this.auth = true;
      this.dataPurchase.user_id = JSON.parse(localStorage.getItem('user')).id;
      // this.router.navigate(['/tabs/home']);
      // this.refreshToken();
    }
  }
  logout() {
    localStorage.clear();

    this.token = null;
    this.user = null;
    this.auth = false;
    location.reload();
    // this.validateSession();
  }
  refreshToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.token
      })
    };
    this.http.get(this.url + '/refresh', httpOptions)
    .subscribe((r: any) => {
      this.token = r.new_token;
      localStorage.setItem('token', r.new_token);
    });
  }
}
