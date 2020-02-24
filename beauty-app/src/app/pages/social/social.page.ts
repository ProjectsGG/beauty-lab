import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage implements OnInit {

  cards = [{
    profileimg: 'PROFILEPICTURE.png',
    images: 'andreaBl.jpg',
    nlikes: '',
    user: 'Andrea beautylab',

  },
]
  constructor() { }

  ngOnInit() {
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
