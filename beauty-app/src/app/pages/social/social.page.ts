import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverpostComponent } from '../../components/popoverpost/popoverpost.component';
import { NavigationExtras, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { HeroService } from '../../services/hero.service';

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
    this.cards[i].like = !this.cards[i].like;
    if (this.cards[i].like) {
      this.cards[i].nlikes =  this.cards[i].nlikes + 1;
    } else {
      this.cards[i].nlikes = this.cards[i].nlikes - 1;
    }
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
    });
  }
}
