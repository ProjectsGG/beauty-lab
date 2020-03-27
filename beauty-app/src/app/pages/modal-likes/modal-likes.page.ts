import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.page.html',
  styleUrls: ['./modal-likes.page.scss'],
})

export class ModalLikesPage implements OnInit {

  id: string;
  likes: any[] = [];
  loading = true;
  constructor(public hero: HeroService,
              private route: ActivatedRoute, private service: BlogService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLikes();
  }
  getLikes() {
    this.service.likes(this.id).subscribe((r: any) => {
      this.likes = r.data;
      this.loading = false;
    });
  }
}
