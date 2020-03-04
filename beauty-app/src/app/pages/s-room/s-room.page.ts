import { Component, OnInit, Injectable} from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { HammerGestureConfig } from '@angular/platform-browser';
import { ModalSroomPage } from '../modal-sroom/modal-sroom.page';
import { ModalController } from '@ionic/angular';



@Component({
  selector: 'app-s-room',
  templateUrl: './s-room.page.html',
  styleUrls: ['./s-room.page.scss'],
})
export class SRoomPage implements OnInit {
  overrides: any;



  rooms: any[] = [];
  i: number;
  constructor(private location: Location,
              private router: Router,
              private service: RoomsService,
              private hero: HeroService,
              private modalController: ModalController ) { }

  ngOnInit() {
    this.getRooms();
  }
  async onPress(imagen) {
    const modal = await this.modalController.create({
       component: ModalSroomPage,
       cssClass: 'room-modal',
       componentProps: {
        imagenes: imagen
     }
      });
    await modal.present();
    }
    async onPressUp() {
      this.modalController.dismiss();
   }

  getRooms() {
    this.service.list().subscribe((r: any) => {
      this.rooms = r.data;
      if (this.hero.dataPurchase.room !== null) {
        this.rooms.forEach((e, i) => {
          e.id_habitacion === this.hero.dataPurchase.room.id_habitacion ? this.i = i : this.i = 0;
        });
      } else {
        this.i = 0;
      }
    });
  }
  backStep() {
    this.hero.dataPurchase.room = this.rooms[this.i];
    this.router.navigate([this.hero.action]);
  }
  nextStep() {
    this.hero.dataPurchase.room = this.rooms[this.i];
    console.log(this.hero.dataPurchase);
    this.router.navigate(['deposit']);
  }
}
Injectable()
export class IonicGestureConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
      const mc = new (window as any).Hammer(element);
      // tslint:disable-next-line: forin
      for (const eventName in this.overrides) {
        if (eventName) {
          mc.get(eventName).set(this.overrides[eventName]);
        }
        return mc;
  }
}



}
