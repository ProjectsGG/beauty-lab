import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TumblrService {

  apiKey = 'D82ANOBOY7m4CUXOKtBIzctXSn8jnGj2ApiRbbKqVYiQZziqQH';

  constructor(private http: HttpClient) { }

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

  getPosts() {
    const url = 'https://api.tumblr.com/v2/blog/beautylabapp.tumblr.com/posts?api_key=' + this.apiKey;
    const httpOptions = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json',
      })
    };
    return this.http.get(url, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
