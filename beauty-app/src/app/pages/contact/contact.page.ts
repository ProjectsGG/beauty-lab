import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { SMS } from '@ionic-native/sms/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  subject = '';
  message = '';
  constructor( 
    public socialMedia: ActionSheetController,
    public sms: SMS,
    public composer: EmailComposer
    ) { }


send(){
  let email = {
    to:"apps.beautylab@gmail.com",
    cc:[],
    bcc:[],
    attachment:[],
    subjet:this.subject,
    body:this.message,
    IsHtml:false,
    app: "Gmail"
  }
  this.composer.open(email);
}

callwhatsapp() {
  location.href = 'https://wa.me/573003408407?text=%20Hi,%20Im%20interested%20in%20BeautyLab';
}

callsms() {
  this.sms.send('+573003408407', 'Hello Im Interested in BeautyLab').then(r => console.log('Error'));
}
  ngOnInit() {
  }

}

