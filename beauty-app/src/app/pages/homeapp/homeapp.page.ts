import { Component, OnInit } from '@angular/core';
import { ToastService } from '../../services/toast.service';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { MenuController } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';


@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.page.html',
  styleUrls: ['./homeapp.page.scss'],
})
export class HomeappPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 600
  };
  videos = [
    {
      video: 'imghome1',
      picture: 'imghome1.png'
    },
    {
      video: 'dancing',
      picture: 'party.png'
    },
    {
      video: 'massage',
      picture: 'doubleroom.png'
    },
  ];
  plans = [
    '3dplan.png',
    'bootyplan.png',
    'supermodelplan.png',
    'superstar2.png',
  ];
  proc = [
    '360lipo.jpg',
    'abs.jpg',
    'booty.jpg',
    'breast.jpg',
    'regularlipo.jpg',
    'nose.jpg',
    'teeths.jpg',
    'cheecks.jpg',
    'chin.jpg'
  ];
  touristic = [{
    items: [1, 2, 3]
  },
  {
    items: [1 , 2, 3]
  }];
  constructor(
    private toast: ToastService,
    public menuCtrl: MenuController,
    private youtube: YoutubeVideoPlayer,
    private screenOrientation: ScreenOrientation) { }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
     }
  ngOnInit() {
  }

  watch(watch) {
    this.youtube.openVideo(watch);
  }
}
