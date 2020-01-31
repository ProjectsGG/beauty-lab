import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-profile-review-blog',
  templateUrl: './profile-review-blog.component.html',
  styleUrls: ['./profile-review-blog.component.scss'],
})
export class ProfileReviewBlogComponent implements OnInit {
  posts: any[] = [
    {
      image: 'girl1.jpg',
      date: '02/01/2020',
      title: 'Hi everyone!!',
      text: 'This is my first post, what a thrill, I love this application.'
    },
    {
      image: 'twoGirls.jpg',
      date: '05/01/2020',
      title: 'With my friend',
      text: 'TShe is my best friend and she is accompanying me in my stay in Colombia to do my first procedure.'
    },
    {
      image: 'party.jpg',
      date: '10/01/2020',
      title: 'Traveling',
      text: 'This is a photo enjoying the landscapes that this beautiful country has.'
    },
    {
      image: 'girl2.jpg',
      date: '02/01/2020',
      title: 'Very satisfied',
      text: 'After the procedure, delighted with the results.'
    }
  ];
  srcImg: any;
  constructor(private camera: Camera, private toast: ToastService) { }

  ngOnInit() {}
  photoPic() {
      const options: CameraOptions = {
        destinationType: this.camera.DestinationType.DATA_URL
      };
      this.camera.getPicture(options).then(
        imageData => {
          this.srcImg = `data:image/jpeg;base64,${imageData}`;
        },
        err => {
          this.toast.error('This option is not available');
        }
      );
  }
}
