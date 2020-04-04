import { Component, OnInit, ViewChild } from '@angular/core';
import { PopoverController, IonContent } from '@ionic/angular';
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
  @ViewChild(IonContent, {static: false}) content: IonContent;
  public chargeData = false;
  toper = false;
  loading = true;
  slideOpts = {
    zoom: true,
    initialSlide: 0,
    direction: 'horizontal',
    speed: 600,
    effect: 'slide',
    loop: true
  };
  constructor(
    private hero: HeroService,
    public service: BlogService,
    public router: Router,
    public popoverController: PopoverController) { }

  cards: any[];
  ngOnInit() {
    this.getPosts(1);
  }
  doRefresh(event) {
    setTimeout(() => {
      this.getPosts(1);
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
  getPosts(opt, id = null) {
    this.toper = false;
    this.service.getData(opt, id).subscribe((r: any) => {
      if (opt === 1) {
        this.cards = r.data;
      } else {
        r.data.forEach(e => {
          e.comment = '';
          e.liked = false;
          e.likes.forEach(like => {
          if (like.id_usuario === this.hero.getUser().id) {
            e.liked = true;
          }
        });
          if (opt === 2) {
            this.cards.push(e);
          } else {
            this.cards.unshift(e);
          }
        });
      }
      this.cards.forEach((e) => {
        e.comment = '';
        e.liked = false;
        e.likes.forEach(like => {
          if (like.id_usuario === this.hero.getUser().id) {
            e.liked = true;
          }
        });
      });
      this.loading = false;
  });
  }
  logScrollStart() {
    this.toper = true;
  }
  ScrollToTop() {
    this.content.scrollToTop(1500);
    setTimeout(() => {
    this.toper = false;
  }, 1500);
  }
  loadData(event) {
    this.getPosts(2, this.cards[this.cards.length - 1].id);
    setTimeout(() => {
    }, 700);
  }
}
