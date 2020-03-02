import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-modal-sroom',
  templateUrl: './modal-sroom.page.html',
  styleUrls: ['./modal-sroom.page.scss'],
})
export class ModalSroomPage implements OnInit {
  @Input() imagenes;
  constructor(private hero: HeroService) { }

  ngOnInit() {
  }

}
