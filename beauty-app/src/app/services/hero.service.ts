import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Purchase } from '../interfaces/purchase';
import { retry, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { NetworkService } from './network.service';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private url: any = 'https://beautylab.app/api';
  private domain: any = 'https://beautylab.app';
  // private url: any = 'https://beautylab.app/api';
  // private domain: any = 'https://beautylab.app';
  private isConnected = false;
  public total = 0;
  public shoppingcart: any[] = [];
  private token: string = null;
  private user: User = {
    bl_points: 0,
    nombres: '',
    apellidos: '',
    img_perfil: null
  };
  public auth = false;
  public action = '';
  public dataPurchase: Purchase = {
    user_id: '',
    fecha_reserva: null,
    fecha_inicio: null,
    fecha_fin: null,
    procedures: [],
    plans: [],
    room: null,
    ok: false
  };
  constructor(
    private net: NetworkService,
    private storage: Storage,
    private router: Router,
    private http: HttpClient
  ) {}
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
  getUrl() {
    return this.url;
  }
  getDomain() {
    return this.domain;
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
    if (token === null || token === undefined) {
      this.router.navigate(['/inicio']);
    } else {
      this.token = token;
      this.user = JSON.parse(localStorage.getItem('user'));
      this.auth = true;
      this.dataPurchase.user_id = JSON.parse(localStorage.getItem('user')).id;
      this.getDataShopping();
      // this.router.navigate(['/tabs/home']);
      // this.refreshToken();
    }
  }
  logout() {
    localStorage.clear();

    this.token = null;
    this.user = null;
    this.auth = false;
    location.reload();
    // this.validateSession();
  }
  refreshToken() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.token
      })
    };
    this.http.get(this.url + '/refresh', httpOptions).subscribe((r: any) => {
      this.token = r.new_token;
      localStorage.setItem('token', r.new_token);
    });
  }
  updateDataUser() {
    this.net.getNetworkStatus().subscribe((connected: boolean) => {
      this.isConnected = connected;
      if (this.isConnected) {
        this.getUserFromApi().subscribe((r: any) => {
          this.user = r.data;
          localStorage.setItem('user', JSON.stringify(r.data));
        });
      }
    });
  }
  getUserFromApi() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'bearer ' + this.token
      })
    };
    const url = this.getUrl() + '/user';
    return this.http
      .get(url, httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getDataShopping() {
    const data = JSON.parse(localStorage.getItem('shoppingcart'));
    if (data !== null) {
      this.shoppingcart = data;
    }
  }
  clearShoppingCart() {
    this.shoppingcart = [];
    localStorage.setItem('shoppingcart', '[]');
  }
  calculateTotal() {
    this.total = 0;
    this.shoppingcart.forEach(e => {
      if (e.procedures.length > 0) {
        this.total = this.total + e.procedures[0].precio;
      } else if (e.plans.length > 0) {
        this.total = this.total + e.plans[0].valor;
      }
    });
  }
}
