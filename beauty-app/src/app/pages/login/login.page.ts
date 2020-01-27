import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { HeroService } from '../../services/hero.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public data: User = {
    email: null,
    password: null
  };
  constructor(
    private location: Location,
    private auth: AuthService,
    private toast: ToastService,
    private router: Router,
    private hero: HeroService
    ) { }

  ngOnInit() {
    if (this.hero.auth === true) {
      this.location.back();
    }
  }
  login() {
    this.auth.login(this.data)
    .subscribe((r: any) => {
      if (r.ok) {
        this.clear();
        // this.storage.set('user', r.user);
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
      email: null,
      password: null
    };
  }
}
