import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email: string;
  constructor(private toastr: ToastService, private service: UserService, private router: Router) { }

  ngOnInit() {
  }
  sendEmail() {
    this.service.forgotPassword(this.email).subscribe((r: any) => {
      if (r.ok) {
        this.toastr.success(r.message, 3500);
        this.router.navigate(['/login']);
      } else {
        this.toastr.error(r.message);
      }
    });
  }
}
