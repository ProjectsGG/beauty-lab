import { Injectable } from '@angular/core';
import { AlertController, NavController,  ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  crcTable = [];

  constructor(
    private alertController: AlertController,
    public toastCtrl: ToastController,
    public navCtrl: NavController
  ) { }

  public async showAlert( text, title = 'Información', okText = 'OK', okHandler = null, cancelText = null, cancelHandler = null ) {
    const options = { header: title, message: text, buttons: [ { text: okText, handler: okHandler } ] };
    if ( cancelText ) {
      options.buttons.push( { text: cancelText, handler: cancelHandler } );
    }
    const alert = await this.alertController.create( options );
    return alert.present();
  }

  public async showToast( text, position: 'top' | 'bottom' | 'middle'= 'middle', duration= 2000 ) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: duration,
      position: position
    });
    return toast.present();
  }


}
