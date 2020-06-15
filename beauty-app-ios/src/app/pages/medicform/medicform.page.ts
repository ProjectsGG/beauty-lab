import { ToastService } from './../../services/toast.service';
import { HeroService } from './../../services/hero.service';
import { UserService } from './../../services/user.service';
import { User } from './../../interfaces/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicform',
  templateUrl: './medicform.page.html',
  styleUrls: ['./medicform.page.scss'],
})
export class MedicformPage implements OnInit {

  data: User;

  constructor(
    private service: UserService,
    private hero: HeroService,
    private toastr: ToastService) { }

  ngOnInit() {
    this.data = this.hero.getUser();
  }

  update() {
    this.service.update(this.data, this.data.id);
  }
}
