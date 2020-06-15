import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalroomsPage } from '../modalrooms/modalrooms.page';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss']
})
export class RoomsPage implements OnInit {


  constructor(private modalCtrl: ModalController) {
  }

  public rooms = [
    'r1.jpg',
    'r2.jpg',
    'r3.jpg',
    'r4.jpg',
    'r5.jpg',
    'r6.jpg'
  ];

  verModal(index) {
    this.modalCtrl.create({
      component : ModalroomsPage,
      componentProps : {
        index
      }
    }).then(modal => modal.present());
  }


  ngOnInit() {}
}
