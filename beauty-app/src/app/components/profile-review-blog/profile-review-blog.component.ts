import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from '../../services/toast.service';
import { Img } from '../../interfaces/img';
import { UserService } from '../../services/user.service';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-profile-review-blog',
  templateUrl: './profile-review-blog.component.html',
  styleUrls: ['./profile-review-blog.component.scss'],
})
export class ProfileReviewBlogComponent implements OnInit {
  loading = true;
  picPhotos = true;
  public slideOpts = {
    zoom: true,
    initialSlide: 0,
    direction: 'horizontal',
    speed: 600,
    effect: 'slide',
  };
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
  img: Img = {
    images: []
  };
  upCamera = {
    icon: 'camera',
    text: 'Camera'
  };
  constructor(public hero: HeroService, private camera: Camera, private toast: ToastService, public service: UserService) { }

  ngOnInit() {
    this.getImagesZone();
  }
  photoPic() {
      if (this.img.images.length < 4) {
        const options: CameraOptions = {
          quality: 30,
          destinationType: this.camera.DestinationType.DATA_URL,
          encodingType: this.camera.EncodingType.JPEG,
          mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(
          imageData => {
            const image = 'data:image/jpeg;base64,' + imageData;
            this.img.images.push(image);
            if (this.img.images.length === 4) {
              this.upCamera = {
                icon: 'cloud-upload',
                text: 'Upload'
              };
            }
          },
          err => {
            this.toast.error('This option is not available');
          }
        );
      } else {
        this.loading = true;
        this.service.uploadPhotos(this.img.images).subscribe((r: any) => {
        this.picPhotos = false;
        if (r.ok) {
            this.toast.success(r.message);
          } else {
            this.toast.error(r.error);
          }
        });
      }
  }
  getImagesZone() {
    this.service.getPhotos().subscribe((r: any) => {
      this.loading  = false;
      if (r.images.length > 0) {
        this.picPhotos = false;
        this.img.images = r.images;
      }
    });
  }
  trash(i) {
    this.img.images.splice(i, 1);
  }
}
