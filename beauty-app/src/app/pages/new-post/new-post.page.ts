import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
import { ToastService } from '../../services/toast.service';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss']
})
export class NewPostPage implements OnInit {
  title: any;
  photos: any[] = [];
  constructor(private camera: Camera, private navCtrl: NavController, private toast: ToastService) {}

  ngOnInit() {}

  photoPic() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.photos.push(`data:image/jpeg;base64,${imageData}`);
    }, (err) => {
      this.toast.error('This option is not available');
    });
  }
  openGallery(): void {
    const cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true
    };
    this.camera.getPicture(cameraOptions)
      .then((imageData) => {
        this.photos.push(`data:image/jpeg;base64,${imageData}`);
      },
      err => this.toast.error('This option is not available'));
  }
  deletePhoto(i): void {
    this.photos.splice(i, 1);
  }
}
