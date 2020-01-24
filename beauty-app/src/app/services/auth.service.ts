import { Injectable } from '@angular/core';
import { HeroService } from './hero.service';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private hero: HeroService,
    private http: HttpClient,
  ) {}

  register(data: User) {
    const url = `${this.hero.getUrl()}/register`;
    return this.http.post(url, data);
  }
  login(data: User) {
    const url = `${this.hero.getUrl()}/login`;
    return this.http.post(url, data);
  }
}
