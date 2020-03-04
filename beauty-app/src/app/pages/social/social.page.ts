import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverpostComponent } from '../../components/popoverpost/popoverpost.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  constructor(public popoverController: PopoverController) { }

  cards = [{
    profileimg: 'siluet1.jpg',
    images: 'andreaBl.jpg',
    nlikes: 9,
    user: 'Andrea Beautylab',
    postage: '2 hours ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false,
    topcomnt: '<3',
    topcomnt2: 'what a crazy nice experience'
  },
  {
    profileimg: 'siluet2.jpeg',
    images: 'lisaBl.jpg',
    nlikes: 200,
    user: 'Lisa Beautylab',
    postage: '2 weeks ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false,
    topcomnt: '<3',
    topcomnt2: 'what a crazy nice experience'
  },
  {
    profileimg: 'siluet3.png',
    images: 'anaBl.jpg',
    nlikes: 20,
    user: 'Ana Beautylab',
    postage: '3 sec ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false,
    topcomnt: 'you look great',
    topcomnt2: 'what a crazy nice experience'
  },
];
  ngOnInit() {
  }
  // more options
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverpostComponent,
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }
 // like color
  likeFocus(i) {
    this.cards[i].like = !this.cards[i].like;
    if (this.cards[i].like) {
      this.cards[i].nlikes =  this.cards[i].nlikes + 1;
    } else {
      this.cards[i].nlikes = this.cards[i].nlikes - 1;
    }
  }
  // reload page
  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
