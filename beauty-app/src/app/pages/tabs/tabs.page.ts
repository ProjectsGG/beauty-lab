import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  iconSocial = false;
  constructor(private router: Router, public hero: HeroService) { }

  ngOnInit() {
    if (this.router.url === '/tabs/make-body') {
      this.iconSocial = true;
    }
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
