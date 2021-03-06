import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from '../../services/toast.service';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../interfaces/blog';
import { HeroService } from '../../services/hero.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss']
})
export class NewPostPage implements OnInit {
  loading = false;
  photos: any[] = [];
  option: any;
  data: Blog = {
    hora: '',
    descripcion: ''
  };
  public slideOpts = {
    zoom: true,
    initialSlide: 0,
    direction: 'horizontal',
    speed: 600,
    effect: 'slide',
  };
  constructor(
    private service: BlogService,
    private route: ActivatedRoute,
    private router: Router,
    public actionSheetController: ActionSheetController,
    private camera: Camera,
    private toast: ToastService,
    private hero: HeroService
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.option = this.router.getCurrentNavigation().extras.state.option;
      }
    });
  }
  ngOnInit() {
    if (this.option === 'camera') {
      this.photoPic();
    } else if (this.option === 'gallery') {
      this.openGallery();
    }
  }
  photoPic() {
    if (this.photos.length > 4) {
      this.toast.error('You cannot upload more than two photos');
    } else {
      const options: CameraOptions = {
        quality: 30,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
        saveToPhotoAlbum: true,
        cameraDirection: this.camera.Direction.FRONT
      };
      this.camera.getPicture(options).then(
        imageData => {
          this.photos.push(`data:image/jpeg;base64,${imageData}`);
        },
        err => console.log(err)
      );
    }
  }
  openGallery(): void {
    if (this.photos.length > 4) {
      this.toast.error('You cannot upload more than two photos');
    } else {
      const cameraOptions = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 30,
        targetWidth: 1000,
        targetHeight: 1000,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true
      };
      this.camera.getPicture(cameraOptions).then(
        imageData => {
          this.photos.push(`data:image/jpeg;base64,${imageData}`);
        },
        err => console.log(err)
      );
    }
  }
  deletePhoto(i): void {
    this.photos.splice(i, 1);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.photoPic();
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.openGallery();
          }
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await actionSheet.present();
  }
  publish() {
    this.loading = true;
    if (this.photos.length === 0 && this.data.descripcion === '') {
      this.toast.light('Please upload images or comment something');
    } else {
      this.data.photos = this.photos;
      this.service.sendData(this.data).subscribe((r: any) => {
        this.loading = false;
        if (r.ok) {
          this.toast.success(r.message);
          this.router.navigate(['/tabs/social']);
        } else {
          this.toast.error(r.error);
        }
        if (r.bl_points) {
          this.toast.successBl('Has won ' + r.bl_points + ' BL Points!');
          this.hero.updateDataUser();
        }
      });
    }
  }
}
