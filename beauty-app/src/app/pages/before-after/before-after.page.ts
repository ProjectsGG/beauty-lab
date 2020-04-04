import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-before-after',
  templateUrl: './before-after.page.html',
  styleUrls: ['./before-after.page.scss'],
})
export class BeforeAfterPage implements OnInit {
  segment = '';
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.segment = ev.detail.value;
  }

}
