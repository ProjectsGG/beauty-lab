import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {
  constructor() { }

  cards = [{
    profileimg: 'siluet1.jpg',
    images: 'andreaBl.jpg',
    nlikes: 9,
    user: 'Andrea Beautylab',
    postage: '2 hours ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false
  },
  {
    profileimg: 'siluet2.jpeg',
    images: 'lisaBl.jpg',
    nlikes: 200,
    user: 'Lisa Beautylab',
    postage: '2 weeks ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false
  },
  {
    profileimg: 'siluet3.png',
    images: 'anaBl.jpg',
    nlikes: 20,
    user: 'ana Beautylab',
    postage: '3 sec ago',
    postext: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur repellat libero blanditiis sunt. Fuga aperiam ad velit minus voluptas sapiente iste ipsam est ipsa autem quis ea, animi sunt sequi.',
    like: false
  },
];
  ngOnInit() {
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
