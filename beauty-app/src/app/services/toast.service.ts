import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  private async toastAlert(header, message, color, duration) {
    const toast = await this.toastController.create({
      header,
      message,
      duration,
      color,
      buttons: [{icon: 'close'}]
    });
    toast.present();
  }
  successBl(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'primary-bl', duration);
  }
  success(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'success', duration);
  }
  error(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'danger', duration);
  }
  info(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'primary', duration);
  }
  warning(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'warning', duration);
  }
  light(tittle, message= null, duration= 2000) {
    this.toastAlert(tittle, message, 'light', duration);
  }
}
