import { Component, OnInit } from '@angular/core';
import { TumblrService } from '../../services/tumblr.service';
import { NavController } from '@ionic/angular';
import { NetworkService } from '../../services/network.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  loading = false;
  frame = true;
  data: any = {
    blog: {
      avatar: [
        {
          url: '',
        }
      ]
    },
    posts: []
  };

  constructor(
      private service: TumblrService,
      private navCtrl: NavController,
      public net: NetworkService) { }

  ngOnInit() {
    this.net.getNetworkStatus().subscribe((connect: boolean) => {
      if (connect) {
        this.frame = true;
      } else {
        this.frame = false;
      }
    });
  }

  getData() {
    this.service.getPosts().subscribe((r: any) => {
      this.data = r.response;
    });
  }

  openTumblr() {
    // this.iab.create('https://beautylabapp.tumblr.com/', '_blank');
  }
}
