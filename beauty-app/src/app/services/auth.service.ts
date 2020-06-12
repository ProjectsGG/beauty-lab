import { Injectable } from "@angular/core";
import { HeroService } from "./hero.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { User } from "../interfaces/user";
import { ToastService } from "./toast.service";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(
    private hero: HeroService,
    private http: HttpClient,
    private toastr: ToastService
  ) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "bearer " + this.hero.getToken(),
    }),
  };
  private data: Data = {
    token: "",
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
    if (this.hero.auth) {
      const url = `${this.hero.getUrl()}/logout`;

      this.data.token = this.hero.getToken();

      this.http.post(url, this.data).subscribe((r: any) => {
        if (r.ok) {
          this.hero.logout();
        } else {
          this.toastr.error(r.error);
        }
      });
    } else {
      this.hero.logout();
    }
  }
}
export interface Data {
  token: string;
}
