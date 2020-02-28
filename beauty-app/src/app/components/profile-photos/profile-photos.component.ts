import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss'],
})
export class ProfilePhotosComponent implements OnInit {
  images: any[] = ['girl1.jpg', 'twoGirls.jpg', 'party.jpg', 'girl2.jpg'];
  constructor(private service: UserService) { }
  list: any[] = [];
  plan: any = {
    nombre: ''
  };
  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    this.service.getHistory().subscribe((r: any) => {
      if (r.ok) {
        this.plan = r.plan.plan;
        this.list = r.data;
      }
    });
  }
}
