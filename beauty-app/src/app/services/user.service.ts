import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HeroService } from './hero.service';
import { ToastService } from './toast.service';
import { Router } from '@angular/router';
import { Img } from '../interfaces/img';
import { User } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private hero: HeroService, private toastr: ToastService, private router: Router) {}

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
  update(user, id) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const url =  this.hero.getUrl() + '/user/update/' + id;
    return this.http.put(url, user, httpOptions).subscribe((r: any) => {
      if (r.ok) {
        localStorage.setItem('user', JSON.stringify(r.user));
        this.hero.setUser(r.user);
        this.toastr.success(r.message);
        // this.router.navigateByUrl('/profile');
        this.router.navigate(['/profile']);
      } else {
       this.toastr.error(r.error);
      }
    });
  }
  uploadPhotos(images) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    const data: Img = {
      images
    };
    const url =  this.hero.getUrl() + '/user/upload/photos';
    return this.http.post(url, data, httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  setImgProfile(image) {
    const data: Img = {
      img: image
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };

    const url = this.hero.getUrl() + '/setImgProfile';

    return this.http.post(url, data, httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  getHistory() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    return this.http.get(this.hero.getUrl() + '/history', httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  getPhotos() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
    return this.http.get(this.hero.getUrl() + '/img/zone', httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
  forgotPassword(email) {
    const url = this.hero.getUrl() + '/forgot-password';
    const data: User = {
      email
    };
    return this.http.post(url, data).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
