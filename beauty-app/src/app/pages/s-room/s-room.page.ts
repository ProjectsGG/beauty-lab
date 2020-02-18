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
      this.i = 0;
    });
  }
  backStep() {
    this.location.back();
  }
  nextStep() {
    this.hero.dataPurchase.room = this.rooms[this.i];
    this.router.navigate(['deposit']);
  }
}
