import { Component, OnInit, Input, NgModule } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { PopoverpostComponent } from '../popoverpost/popoverpost.component';
import { Commentary } from '../../interfaces/commentary';
import { ModalLikesPage } from 'src/app/pages/modal-likes/modal-likes.page';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('posts') cards: any[]; Id;

  auth;

  public slideOpts = {
    zoom: true,
    initialSlide: 0,
    direction: 'horizontal',
    speed: 600,
    effect: 'slide',
  };
  constructor(
    public hero: HeroService,
    public service: BlogService,
    public router: Router,
    public popoverController: PopoverController,
    private modalCtrl: ModalController,
    private toast: ToastService, ) { }
ngOnInit() {
  this.cards.forEach((e) => {
    e.isCom = false;
    e.comment = '';
    e.liked = false;
    e.likes.forEach(like => {
      if (like.id_usuario === this.hero.getUser().id) {
        e.liked = true;
      }
    });
  });
  this.auth = this.hero.auth;
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
  comment(i) {

    if (!this.auth) {
      this.toast.error('ups! To make a comment, you must log in');
      this.router.navigate(['login']);
    }

    this.cards[i].isCom = true;
    const data: Commentary = {
      id_blog: this.cards[i].id,
      comentario: this.cards[i].comment,
    };
    if (data.comentario !== '') {
      this.service.comment(data).subscribe((r: any) => {
        this.cards[i].isCom = false;
        this.cards[i].comment = '';
        this.cards[i].comments.push(r.comment);
      });
    } else {
      this.cards[i].isCom = false;
    }
  }

  report(i) {
    const idBlog =  this.cards[i].id;
    this.service.report(idBlog).subscribe((r: any) => {
      this.toast.success('Thanks for your report. Your request has been sent for'+ 
        'review by the administration of BeautyLab');
    });
  }

  viewProfile(id) {
    console.log(id);
    this.router.navigate(['/profile/' + id]);
  }
    async openModal(Id) {
      const modal = await this.modalCtrl.create({
         component: ModalLikesPage,
         componentProps: {
          identificador: Id
       }
        });
      await modal.present();
      }
  }
