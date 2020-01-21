import { Component, OnInit } from '@angular/core';
import { User } from './../../interfaces/user';
import { ToastService } from './../../services/toast.service';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public data: User = {
    name: null,
    email: null,
    password: null,
    phone: null,
  };
  public passwordConfirm = '';
  constructor(private router: Router, private toast: ToastService, private auth: AuthService) { }

  ngOnInit() {
  }
  register() {
    this.auth.register(this.data).subscribe(r => {
      console.log(r);
    });
  }
}
