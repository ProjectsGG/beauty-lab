import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
@Component({
  selector: 'app-v-profile',
  templateUrl: './v-profile.page.html',
  styleUrls: ['./v-profile.page.scss'],
})
export class VProfilePage implements OnInit {
  data: any[];
  user: any;
  content = 'images';
  id: string;
  constructor(public hero: HeroService, private route: ActivatedRoute, private service: BlogService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
  segmentChanged(ev: any) {
    this.hero.getDomain();
    this.content = ev.detail.value;
  }
  getData(id) {
    this.service.blogUser(id).subscribe((r: any) => {
      this.user = r.user;
      this.data = r.data;
    });
  }
}
