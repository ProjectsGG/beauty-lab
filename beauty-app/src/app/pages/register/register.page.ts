import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../services/toast.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public data = {
    name: '',
    email: '',
    password: '',
    phone: '',
  };
  public passwordConfirm = '';
  constructor(private router: Router, private toast: ToastService) { }

  ngOnInit() {
  }
  register() {
    if (this.data.name === '') {
      this.toast.error('Name required');
    } else if (this.data.email === '') {
      this.toast.error('Email required');
    } else if (this.data.password === '') {
      this.toast.error('Password required');
    } else if (this.data.password !== this.passwordConfirm) {
      this.toast.error('Passwords do not match');
    } else {
      this.toast.success('Succesfully!!');
      this.router.navigate(['/homeapp']);
    }
  }
}
