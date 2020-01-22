import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';
import { AuthService } from './../../services/auth.service';
import { ToastService } from '../../services/toast.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

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
    private auth: AuthService,
    private toast: ToastService,
    private router: Router
  ) {}

  ngOnInit() {}
  register() {
    this.auth.register(this.data)
    .subscribe((r: any) => {
      if (r.ok) {
        this.clear();
        this.router.navigate(['/homeapp']);
        this.toast.success(r.message);
      } else {
        this.listError(r.errors);
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
