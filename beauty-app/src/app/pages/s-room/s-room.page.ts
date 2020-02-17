import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../../services/rooms.service';

@Component({
  selector: 'app-s-room',
  templateUrl: './s-room.page.html',
  styleUrls: ['./s-room.page.scss'],
})
export class SRoomPage implements OnInit {

  rooms: any[] = [];
  selected: number;
  constructor(private service: RoomsService) { }

  ngOnInit() {
    this.getRooms();
  }
  getRooms() {
    this.service.list().subscribe((r: any) => {
      this.rooms = r.data;
      this.selected = this.rooms[0].id_habitacion;
    });
  }
}
