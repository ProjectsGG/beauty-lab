import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-spyp',
  templateUrl: './modal-spyp.page.html',
  styleUrls: ['./modal-spyp.page.scss'],
})
export class ModalSpypPage implements OnInit {
  @Input() imagenes; text;
    constructor(public hero: HeroService,
                private modalCtrl: ModalController) { }
    closeMd() {
  this.modalCtrl.dismiss();
}
  ngOnInit() {
  }

}
