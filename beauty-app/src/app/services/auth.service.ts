import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private hero: HeroService,
    private http: HttpClient,
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'bearer ' + this.hero.getToken()
    })
  };

  register(data: User) {
    const url = `${this.hero.getUrl()}/register`;
    return this.http.post(url, data);
  }
  login(data: User) {
    const url = `${this.hero.getUrl()}/login`;
    return this.http.post(url, data);
  }
  logout() {
    const url = `${this.hero.getUrl()}/logout`;
    const data = {
      token: this.hero.getToken
    };
    this.http.post(url, data, this.httpOptions).subscribe((r: any) => {
      console.log(r);
      this.hero.logout();
    });
  }
}
