import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss']
})
export class ProfilePhotosComponent implements OnInit {
  images: any[] = ['girl1.jpg', 'twoGirls.jpg', 'party.jpg', 'girl2.jpg'];
  constructor(private service: UserService) {}
  view = 0;
  data = [];
  history = [];
  value = null;
  ngOnInit() {
    this.getHistory();
  }
  getHistory() {
    this.service.getHistory().subscribe((r: any) => {
      if (r.ok) {
        if (r.reservation.length > 0) {
          this.view = 1;
          this.data = r.reservation;
          this.value = r.reservation.length > 1 ? '' : 0;
          this.history = r.reservation.length > 1 ? '' : this.data[0].history;
        } else {
          this.view = 2;
        }
      }
    });
  }
  segmentChanged(ev: any) {
    this.history = this.data[ev.detail.value].history;
  }
}
