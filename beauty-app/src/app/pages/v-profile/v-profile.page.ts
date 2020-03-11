import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-v-profile',
  templateUrl: './v-profile.page.html',
  styleUrls: ['./v-profile.page.scss'],
})
export class VProfilePage implements OnInit {
  content = 'images';
  id: number;
  constructor(public hero: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
  }
  segmentChanged(ev: any) {
    this.hero.getDomain();
    this.content = ev.detail.value;
  }
}
