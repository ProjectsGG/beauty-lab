import { Component, OnInit } from '@angular/core';
import {MenuController} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public menuCtrl: MenuController) { }

  // ionViewWillEnter() {
  //   this.menuCtrl.enable(false);
  //  }

  ngOnInit() {
  }

}
