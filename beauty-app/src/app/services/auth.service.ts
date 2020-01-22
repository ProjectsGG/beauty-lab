import { Injectable } from '@angular/core';
import {HeroService} from './hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private hero: HeroService, private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  register(dataR: User) {
    const data = {
      nombres: 'xxxxxx',
      email: '33xxx@gmail.com',
      password: 'xxxxxx'
    };
    const url = `${this.hero.getUrl()}/register`;
    return this.http.post(url, data);
  }
}
