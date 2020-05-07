import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { HeroService } from '../hero.service';
import { BeforeAfter } from '../../interfaces/before-after';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BeforeAfterService {

  private httpOptions;

  constructor(private http: HttpClient, private hero: HeroService) { 
    this.toAsignToken();
  }

  toAsignToken() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
  }
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
  saveResult(data: BeforeAfter) {
    const url = this.hero.getUrl() + '/before-after';
    return this.http.post(url, data , this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getClients() {
    const url = this.hero.getUrl() + '/clients';
    return this.http.get(url, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
