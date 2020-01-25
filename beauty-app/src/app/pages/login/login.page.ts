import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
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
    private auth: AuthService,
    private toast: ToastService,
    private router: Router,
    private storage: Storage
    ) { }

  ngOnInit() {
  }
  login() {
    this.auth.login(this.data)
    .subscribe((r: any) => {
      if (r.ok) {
        this.clear();
        this.router.navigate(['/homeapp']);
        this.toast.success(r.message);
        this.storage.set('token', r.user.token);
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
