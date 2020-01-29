import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.page.html',
  styleUrls: ['./plans.page.scss'],
})
export class PlansPage implements OnInit {

plans = [
  '3dplan.jpg',
  'bootyplan.jpg',
  'superplan.jpg'
];

  constructor() { }

  ngOnInit() {
  }

}
