import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  componentes: Observable<Componente[]>;
  data: any;
  name: string;
  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();

    const dataLs = JSON.parse(localStorage.getItem('user'));
    if (dataLs === null) {
      this.name = '';
    } else {
      this.name = dataLs.nombres;
      this.data = dataLs;
    }
  }
  logout(name) {
    if (name === 'L o g o u t') {
      this.auth.logout();
    }
  }
  redirect() {
    this.router.navigate(['/profile']);
  }
}
