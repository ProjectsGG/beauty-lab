import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverpostComponent } from '../../components/popoverpost/popoverpost.component';
import { NavigationExtras, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { HeroService } from '../../services/hero.service';
import { Commentary } from '../../interfaces/commentary';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  constructor(
    private hero: HeroService,
    public service: BlogService,
    public router: Router,
    public popoverController: PopoverController) { }

  cards: any[];
  ngOnInit() {
    this.getPosts();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverpostComponent,
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
  likeFocus(i) {
    this.cards[i].liked = !this.cards[i].liked;
    this.cards[i].liked ? this.cards[i].likes_count ++ : this.cards[i].likes_count --;
    this.service.like(this.cards[i].id).subscribe();
  }
  doRefresh(event) {
    this.getPosts();
    setTimeout(() => {
      this.getPosts();
      event.target.complete();
    }, 2000);
  }
  goToNewPost(param) {
    const navigationExtras: NavigationExtras = {
      state: {
        option: param
      }
    };
    this.router.navigate(['/new-post'], navigationExtras);
  }
  getPosts() {
    this.service.getData().subscribe((r: any) => {
      this.cards = r.data;
      this.cards.forEach((e) => {
        e.comment = '';
        e.liked = false;
        e.likes.forEach(like => {
          if (like.id_usuario === this.hero.getUser().id) {
            e.liked = true;
          } else {
            console.log(like);
          }
        });
      });
    });
  }
  comment(i) {
    const data: Commentary = {
      id_blog: this.cards[i].id,
      comentario: this.cards[i].comment,
    };
    this.service.comment(data).subscribe((r: any) => {
      this.cards[i].comments.push(r.comment);
    });
  }
  like(i) {
    const post = this.cards[i].id;
  }
}
