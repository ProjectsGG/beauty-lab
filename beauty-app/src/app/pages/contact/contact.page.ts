import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  constructor( public socialMedia: ActionSheetController, private sms: SMS) { }
  async showActionSheet() {
    const actionMedia = await this.socialMedia.create({
      header: 'Share',
      buttons: [{
        text: 'WhatsApp',
        icon: 'logo-whatsapp',
        cssClass: 'green-wpp',
        handler: () => {
          location.href = 'https://wa.me/573003408407?text=%20Hi,%20Im%20interested%20in%20BeautyLab';
        }
      }, {
        text: 'Mail',
        icon: 'mail',
        cssClass: 'blue-mail',
        handler: () => {
          console.log('Mail clic');
        }
      }, {
        text: 'Message',
        icon: 'cloud-outline',
        cssClass: 'gray-msg',
        handler: () => {
          this.sms.send('+573003408407', 'Hello Im Interested in BeautyLab');
        },
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clic');
        }
      }]
    });
    await actionMedia.present();
  }

  ngOnInit() {
  }

}

