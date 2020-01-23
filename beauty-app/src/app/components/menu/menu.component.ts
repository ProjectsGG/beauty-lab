import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: DataService, private hero: HeroService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  logout(name) {
    if (name === 'Logout') {
      console.log('deslogeado');
      this.hero.logout();
    }
  }


}
