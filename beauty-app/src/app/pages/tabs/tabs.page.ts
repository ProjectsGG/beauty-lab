import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  iconSocial = false;
  constructor() { }

  ngOnInit() {
  }
  setValue(opt) {
    if (opt === 1) {
      if (this.iconSocial) {
        this.iconSocial = !this.iconSocial;
      }
    } else if (opt === 2) {
      if (!this.iconSocial) {
        this.iconSocial = !this.iconSocial;
      }
    }
  }
}
