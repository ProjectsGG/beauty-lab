import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss']
})
export class RoomsPage implements OnInit {
  public rooms = [
    { img: 3, title: 'Shared Room', check: true},
    { img: 2, title: 'Double Room', check: false},
    { img: 1, title: 'Private Room', check: false}
  ];

  constructor() {}

  ngOnInit() {}
}
