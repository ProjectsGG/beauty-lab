import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss']
})
export class NewPostPage implements OnInit {
  photo: any;
  imageSrc: string;
  imageComp: any;
  constructor(private camera: Camera, private navCtrl: NavController) {}

  ngOnInit() {}

  photoPic() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL
    };
    this.camera.getPicture(options)
    .then((imageData) => {
      this.photo = 'data:image/jpeg;base64,' + imageData;
      this.imageComp = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  private openGallery(): void {
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
      .then((fileUri) => {
        this.imageSrc = fileUri;
        this.imageComp = 'data:image/jpeg;base64,' + fileUri;
      },
      err => console.log(err));
  }
}
