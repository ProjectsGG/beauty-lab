import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastService } from '../../services/toast.service';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.page.html',
  styleUrls: ['./new-post.page.scss']
})
export class NewPostPage implements OnInit {
  photos: any[] = [];
  constructor(public actionSheetController: ActionSheetController, private camera: Camera, private toast: ToastService) {}

  ngOnInit() {}

  photoPic() {
    if (this.photos.length > 2) {
      this.toast.error('You cannot upload more than two photos');
    } else {
      const options: CameraOptions = {
        quality: 75,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };
      this.camera.getPicture(options).then(
        imageData => {
          this.photos.push(`data:image/jpeg;base64,${imageData}`);
        },
        err => {
          this.toast.error('This option is not available');
        }
      );
    }
  }
  openGallery(): void {
    if (this.photos.length > 2) {
      this.toast.error('You cannot upload more than two photos');
    } else {
      const cameraOptions = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 75,
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
        err => this.toast.error('This option is not available')
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

}
