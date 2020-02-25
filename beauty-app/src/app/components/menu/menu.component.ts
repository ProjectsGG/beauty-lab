import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../interfaces/user';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>;
  data: any;
  name: string;
  imgPerfil = null;
  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: Router,
    private hero: HeroService
  ) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
    this.genNameUser();
  }
  logout() {
      this.auth.logout();
  }
  redirect() {
    this.router.navigate(['/profile']);
  }
  genNameUser() {
    const dataLs = JSON.parse(localStorage.getItem('user'));
    if (dataLs === null) {
      this.name = '';
      this.imgPerfil = null;
    } else {
      this.imgPerfil = dataLs.img_perfil;
      const long = dataLs.nombres.length;
      // tslint:disable-next-line: prefer-const
      let newNomber = '';
      for (let i = 0; i < long; i++) {
        const char = dataLs.nombres.charAt(i);
        newNomber += char + ' ';
      }
      this.name = newNomber;
      this.data = dataLs;
    }
  }
}
