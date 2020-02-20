import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  content = 'photos';
  data: any;
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('user'));
  }
  segmentChanged(ev: any) {
    this.content = ev.detail.value;
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Gallery',
        icon: 'images',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
