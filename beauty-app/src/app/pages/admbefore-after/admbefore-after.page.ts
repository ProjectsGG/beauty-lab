import { Component, OnInit } from '@angular/core';
import { BeforeAfter } from '../../interfaces/before-after';
import { UtilsService } from '../../utils/utils.service';
import { ActionSheetController } from '@ionic/angular';
import { Camera } from '@ionic-native/camera/ngx';
import { BeforeAfterService } from '../../services/admin/before-after.service';

@Component({
  selector: 'app-admbefore-after',
  templateUrl: './admbefore-after.page.html',
  styleUrls: ['./admbefore-after.page.scss'],
})
export class AdmbeforeAfterPage implements OnInit {
  public message = '';
  public isSelected = false;
  public selectedData: any = null;
  public data: BeforeAfter = {
    id_usuario: null,
    cirugias: '',
    photos: [],
  };
  public clients = [
    {
      id: 1,
      name: 'John Doe',
      avatar:
        'https://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg',
    },
    {
      id: 2,
      name: 'Barney Stinson',
      // tslint:disable-next-line: max-line-length
      avatar: 'data:image/jpeg;base64,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',
    },
    {
      id: 3,
      name: 'Ted Mosby',
      // tslint:disable-next-line: max-line-length
      avatar: 'https://vignette.wikia.nocookie.net/universo-ficticio/images/1/15/Josh-radnor-ted-mosby.jpg/revision/latest/top-crop/width/360/height/450?cb=20171203092323&path-prefix=es',
    },
  ];
  public results = [];

  constructor(
    private service: BeforeAfterService,
    private camera: Camera,
    private utils: UtilsService,
    public actionCtrl: ActionSheetController
  ) {}

  ngOnInit() {
    this.getClients();
  }
  clear() {
    this.results = [];
    this.message = '';
  }
  search(ev) {
    const value = ev.target.value;
    if (value && value.trim() !== '') {
      this.results = this.clients.filter((item) => {
        return item.name.toLowerCase().indexOf(value.toLowerCase()) > -1;
      });
      if (this.results.length === 0) {
        this.message = 'No matching results found';
      } else {
        this.message = 'Results';
      }
    } else {
      this.results = [];
      this.message = '';
    }
  }
  selected(i) {
    this.selectedData = this.results[i];
    this.data.id_usuario = this.results[i].id;
    this.clear();
    this.isSelected = true;
  }
  deselect() {
    this.isSelected = false;
    this.selectedData = null;
  }
  saveResult() {
    if (this.selectedData === null || this.data.cirugias === '') {
      this.utils.showAlert('Fill the form', 'Error');
      return;
    } else {
      this.service.saveResult(this.data);
      this.utils.showAlert('', 'Success');

    }
  }
  async actionSheet() {
    const actionSheet = await this.actionCtrl.create({
      header: 'Select the type of image',
      buttons: [
        {
          text: 'Before',
          icon: 'undo',
          handler: () => {
            this.openGallery(1);
          },
        },
        {
          text: 'After',
          icon: 'redo',
          handler: () => {
            this.openGallery(2);
          },
        },
        {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
  openGallery(type) {
    if (this.data.photos.length > 4) {
      this.utils.showAlert('You cannot upload more than four photos', 'Error');
    } else {
      const cameraOptions = {
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        quality: 30,
        targetWidth: 1000,
        targetHeight: 1000,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        correctOrientation: true,
      };
      this.camera.getPicture(cameraOptions).then(
        (imageData) => {
          this.data.photos.push({
            tipo: type,
            img: `data:image/jpeg;base64,${imageData}`,
          });
        },
        (err) => console.log(err)
      );
    }
  }
  getClients() {
    this.service.getClients().subscribe((r: any) => {
      console.log(r);
    });
  }
}
