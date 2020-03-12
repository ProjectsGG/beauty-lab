import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Commentary } from '../../interfaces/commentary';
@Component({
  selector: 'app-v-profile',
  templateUrl: './v-profile.page.html',
  styleUrls: ['./v-profile.page.scss'],
})
export class VProfilePage implements OnInit {
  data: any[];
  user: any = {
    nombres: '',
    apellidos: '',
    img_perfil: null
  };
  content = 'images';
  id: string;
  constructor(public hero: HeroService, private route: ActivatedRoute, private service: BlogService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getData(this.id);
  }
  segmentChanged(ev: any) {
    this.content = ev.detail.value;
  }
  getData(id) {
    this.service.blogUser(id).subscribe((r: any) => {
      this.user = r.user;
      this.data = r.data;
      this.data.forEach((e) => {
        e.comment = '';
        e.liked = false;
        e.likes.forEach(like => {
          if (like.id_usuario === this.hero.getUser().id) {
            e.liked = true;
          }
        });
      });
    });
  }
  comment(i) {
    const data: Commentary = {
      id_blog: this.data[i].id,
      comentario: this.data[i].comment,
    };
    this.service.comment(data).subscribe((r: any) => {
      this.data[i].comment = '';
      this.data[i].comments.push(r.comment);
    });
  }
  likeFocus(i) {
    this.data[i].liked = !this.data[i].liked;
    this.data[i].liked ? this.data[i].likes_count ++ : this.data[i].likes_count --;
    this.service.like(this.data[i].id).subscribe();
  }
}
