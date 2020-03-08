import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Instagram } from '@ionic-native/instagram/ngx';


@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {
  currentImage = null;
  text = 'Check out in Beauty Lab';
  Url = 'https://beautylab.app';

  constructor(private socialsharing: SocialSharing, private camera: Camera, private instagram: Instagram) { }

 loadimage(){
  let options: CameraOptions = {
    quality:100,
    destinationType:this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
  }

    this.camera.getPicture(options).then(data =>{
      this.currentImage = 'data:image/jpeg;base64,' + data;
    })
 }

 cleanImage(){
   this.currentImage = null;
 }

 shareimage(){
  this.instagram.share(this.currentImage, 'Install BeautyLab').then((res) =>{
    console.log('Exito');
    this.cleanImage();
  }).catch((e) =>{
    console.log('Errore')
  });
 } 
 
shareWhatsapp(){
  this.socialsharing.shareViaWhatsApp(this.text, this.currentImage, this.Url).then((res) =>{
    console.log('Exito');
    this.cleanImage();
  }).catch((e) =>{
    console.log('Errore')
  });
}

shareFacebook(){
 this.socialsharing.shareViaFacebook(this.text, this.currentImage, this.Url).then((res) => {
  console.log('Exito');
  this.cleanImage();
}).catch((e) => {
  console.log('Error');
});
}

shareTwitter(){
  this.socialsharing.shareViaTwitter(this.text, this.currentImage, this.Url).then((res) => {
    console.log('Exito');
    this.cleanImage();
  }).catch((e) => {
    console.log('Error');
  });
}

  ngOnInit() {
  }

}
