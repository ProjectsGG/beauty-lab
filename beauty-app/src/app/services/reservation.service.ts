import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HeroService } from './hero.service';
import { Reservation } from '../interfaces/reservation';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient, private hero: HeroService) { 
    this.asignToken();
  }
  public httpOptions;
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
  asignToken() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.hero.getToken()
      })
    };
  }
  savePayment(data: Reservation) {
    const url = this.hero.getUrl() + '/reservation';
    return this.http.post(url, data, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
  saveShoppincart() {
    const data: Reservations = {
      reservations: []
    };
    this.hero.shoppingcart.forEach(e => {
      const res: Reservation = {
        id_usuario: this.hero.getUser().id,
        fecha_reserva: e.fecha_reserva,
        fecha_inicio: e.fecha_inicio,
        fecha_fin: e.fecha_fin,
        id_procedimiento: null,
        id_plan: null
      };
      if (e.procedures.length > 0) {
        res.id_procedimiento = e.procedures[0].id_procedimiento;
      } else {
        res.id_plan = e.plans[0].id_plan;
      }
      data.reservations.push(res);
    });
    const url = this.hero.getUrl() + '/reservations';
    return this.http.post(url, data, this.httpOptions).pipe(
      retry(2),
      catchError(this.handleError)
    );
  }
}
interface Reservations {
  reservations: Reservation[];
}

