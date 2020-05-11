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
  public clients: any = [];
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
        const fullname = item.nombres + '' + item.apellidos;
        return fullname.toLowerCase().indexOf(value.toLowerCase()) > -1;
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
      this.data.id_usuario = this.selectedData.id;
      this.service.saveResult(this.data).subscribe((r: any) => {
        if (r.ok) {
          this.utils.showAlert(r.message, 'Success');
        } else {
         this.utils.showAlert(r.error, 'Error');
        }
      });
      // this.utils.showAlert('', 'Success');
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
      this.clients = r.data;
    });
  }
}
