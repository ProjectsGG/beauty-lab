import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss']
})
export class RegisterPage implements OnInit {
  public data: User = {
    nombres: null,
    email: null,
    password: null,
    movil: null,
    password_confirmation: null
  };
  constructor(
    private storage: Storage,
    private auth: AuthService,
    private hero: HeroService,
    private location: Location,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.hero.auth === true) {
      this.location.back();
    }
  }
  register() {
    this.auth.register(this.data)
    .subscribe((r: any) => {
      if (r.ok) {
        this.clear();
        localStorage.setItem('user', JSON.stringify(r.user));
        localStorage.setItem('token', r.token);
        this.toast.success(r.message);
        this.hero.validateSession();
        this.router.navigate(['/homeapp']);
      } else {
        this.toast.error(r.message);
      }
    });
  }
  clear() {
    this.data = {
      nombres: null,
      email: null,
      password: null,
      movil: null,
      password_confirmation: null
    };
  }
  listError(e) {
    let bander = true;
    // tslint:disable-next-line: prefer-const
    for (let i in e) {
      if (e.hasOwnProperty(i)) {
        if (bander) {
          this.toast.error(e[i]);
          bander = false;
        }
      }
    }
  }
}
