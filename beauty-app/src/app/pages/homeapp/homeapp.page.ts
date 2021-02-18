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
    '3d-plan.jpg',   
    'superstar-plan.jpg',
    'icon-plan.jpg'
  ];
  proc = [
    '360lipox.jpg',
    'absx.jpg',
    'Eyebrownsx.jpg',
    'Theethx.jpg',
    'botox.jpg',  
    'nose.png',
    'Theethx.jpg',
    'cheekx.jpg',
    'chinx.jpg',
  ];
  touristic = [{
    items: [
      'medellin1.jpg', 
      'medelllin2.jpg', 
      'guatape1.jpg'
  ]},
  {
    items: [
      'guatape2.jpg', 
      'guatape3.jpg', 
      'finca.jpg'
    ]
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
