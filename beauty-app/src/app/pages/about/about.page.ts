import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  constructor() { }
  cards = [{
  name: 'andres',
  lastname: 'felipe',
  aboutme: 'im a programmer',
  age: '19',
  }];

  ngOnInit() {
  }

}
