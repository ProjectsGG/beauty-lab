import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: any = 'http://192.168.0.15:8000/api';
  private token: string = null;
  private user: User;
  public auth = false;

  constructor(private storage: Storage,  private router: Router, private http: HttpClient) {}

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
      this.router.navigate(['/tabs/home']);
      // this.refreshToken();
    }
  }
  logout() {
    localStorage.clear();

    this.token = null;
    this.user = null;
    this.auth = false;

    this.validateSession();
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
