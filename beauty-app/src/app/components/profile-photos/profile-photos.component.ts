import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-photos',
  templateUrl: './profile-photos.component.html',
  styleUrls: ['./profile-photos.component.scss'],
})
export class ProfilePhotosComponent implements OnInit {
  images: any[] = ['girl1.jpg', 'twoGirls.jpg', 'party.jpg', 'girl2.jpg'];
  constructor() { }

  ngOnInit() {}

}
