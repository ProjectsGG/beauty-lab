import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';
import { HeroService } from '../../services/hero.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-s-room',
  templateUrl: './s-room.page.html',
  styleUrls: ['./s-room.page.scss'],
})
export class SRoomPage implements OnInit {

  rooms: any[] = [];
  i: number;
  constructor(private location: Location, private router: Router, private service: RoomsService, private hero: HeroService) { }

  ngOnInit() {
    this.getRooms();
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
    this.router.navigate(['/plans-detail']);
  }
  nextStep() {
    this.hero.dataPurchase.room = this.rooms[this.i];
    this.router.navigate(['deposit']);
  }
}
