import { Component, OnInit } from '@angular/core';
import { TumblrService } from '../../services/tumblr.service';
import { NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  loading = false;
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

  constructor(private service: TumblrService, private navCtrl: NavController, private iab: InAppBrowser) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getPosts().subscribe((r: any) => {
      this.data = r.response;
    });
  }

  openTumblr() {
    this.iab.create('https://beautylabapp.tumblr.com/', '_blank');
  }
}
