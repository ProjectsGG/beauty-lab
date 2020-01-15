import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  private async toastAlert(header, message, color) {
    const toast = await this.toastController.create({
      header,
      message,
      duration: 2000,
      color,
      buttons: [{icon: 'close'}]
    });
    toast.present();
  }
  success(tittle, message= null) {
    this.toastAlert(tittle, message, 'success');
  }
  error(tittle, message= null) {
    this.toastAlert(tittle, message, 'danger');
  }
  info(tittle, message= null) {
    this.toastAlert(tittle, message, 'primary');
  }
  warning(tittle, message= null) {
    this.toastAlert(tittle, message, 'warning');
  }
}
