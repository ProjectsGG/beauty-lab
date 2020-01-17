import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  content = 'personalData';
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.content = ev.detail.value;
  }
}
