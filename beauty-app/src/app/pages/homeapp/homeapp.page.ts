import { Component, OnInit } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ToastService } from './../../services/toast.service';
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
  plans = [1, 2 , 1 ];
  services = [{
    items: [ 1, 2, 3, 4, 5, 6]
  },
  {
    items: [ 1, 2, 3, 4, 5, 6]
  }];
  touristic = [{
    items: [1, 2, 3]
  },
  {
    items: [1 , 2, 3]
  }];
  constructor(private toast: ToastService, private videoPlayer: VideoPlayer) { }

  ngOnInit() {
  }
  viewVideo(video) {
    this.videoPlayer.play(`file:///android_asset/www/assets/videos/${video}.mp4`).then(() => {
      console.log('video completed');
    }).catch(err => {
      this.toast.error(err);
    });
  }
}
