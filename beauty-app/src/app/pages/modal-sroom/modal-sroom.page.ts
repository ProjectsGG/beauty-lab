import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ModalSroomPageModule } from './modal-sroom.module';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-sroom',
  templateUrl: './modal-sroom.page.html',
  styleUrls: ['./modal-sroom.page.scss'],
})
export class ModalSroomPage implements OnInit {
  @Input() imagenes;
  constructor(public hero: HeroService,
              private modalCtrl: ModalController) { }
  closeMd() {
    this.modalCtrl.dismiss();
  }
  ngOnInit() {
  }

}
