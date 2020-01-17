import { Injectable } from '@angular/core';
import {HeroService} from './hero.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../interfaces/user';
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

  register(credentials: User) {
    const url = this.hero.getUrl();
  }
}
