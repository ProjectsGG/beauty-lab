import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-modal-likes',
  templateUrl: './modal-likes.page.html',
  styleUrls: ['./modal-likes.page.scss'],
})

export class ModalLikesPage implements OnInit {

  @Input() Id;
  likes = [{
    img: 'PROFILEPICTURE.png',
    name: 'Miguel Angel'
  },
  {
    img: 'PROFILEPICTURE.png',
    name: 'Andres Rendon'
  },
  {
    img: 'PROFILEPICTURE.png',
    name: 'Richard Albeiro'
  }];
  constructor(private hero: HeroService,
              private modalCtrl: ModalController) { }
  closeMd() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {
  }

}
