import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ModalController, NavParams, IonSlides } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-modalrooms',
  templateUrl: './modalrooms.page.html',
  styleUrls: ['./modalrooms.page.scss'],
})
export class ModalroomsPage implements OnInit {

  indice: number;

  @ViewChild('slides', {static: true}) slides: IonSlides;

  @ViewChild('slides', {static: false}) slide: ElementRef;

  public rooms = [
    'r1.jpg',
    'r2.jpg',
    'r3.jpg',
    'r4.jpg',
    'r5.jpg',
    'r6.jpg'
  ];


  constructor(private modalCtrl: ModalController, private navparams: NavParams, private loadinController: LoadingController) {
    this.loadinController.create({
      message: 'Cargando Imagen',
      duration: 1000
    }).then(loading => loading.present());


    this.indice = this.navparams.get('index');
    console.log(this.indice);
  }

  cerrarModal() {
    this.modalCtrl.dismiss();
  }

  ngOnInit() {

    console.log(this.slide);

    this.slides.slideTo(this.indice, 0).then(res => {
      this.loadinController.dismiss();
    });
  }

}
