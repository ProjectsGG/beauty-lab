import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HeroService } from './hero.service';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Blog } from '../interfaces/blog';
import { Commentary } from '../interfaces/commentary';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient, private hero: HeroService) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  sendData(data: Blog) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/blog';
    return this.http.post(url, data, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getData(option, id = null) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    let url = '';
    if (id !== null) {
      url = this.hero.getUrl() + '/blog/posts/' + option + '/' + id;
    } else {
      url = this.hero.getUrl() + '/blog/posts/' + option;
    }
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  comment(data: Commentary) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/commentary';
    return this.http.post(url, data, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  report(idBlog) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = this.hero.getUrl() + '/blog/report' + '/' + idBlog;
    return this.http.post(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  block(datos: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = this.hero.getUrl() + '/blog/block';
    return this.http.post(url, datos, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  validateUserblock(datos: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/blog/reportuser/' + datos.user_id + '/' + datos.user_blocked_id;
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }

  blogUser(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/blog/user/' + id;
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  like(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/blog/like/' + id;
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  likes(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url = this.hero.getUrl() + '/blog/likes/' + id;
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
