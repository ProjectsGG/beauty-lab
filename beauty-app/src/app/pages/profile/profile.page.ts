import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  content = 'personalData';
  data: any;
  constructor() { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('user'));
  }
  segmentChanged(ev: any) {
    this.content = ev.detail.value;
  }
}
