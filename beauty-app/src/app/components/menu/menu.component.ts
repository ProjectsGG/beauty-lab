import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;
  data: any;
  constructor( private dataService: DataService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();

    const data = JSON.parse(localStorage.getItem('user'));
    this.data = data;
  }
  logout(name) {
    if (name === 'Logout') {
      this.auth.logout();
    }
  }
  redirect() {
    this.router.navigate(['/profile']);
  }


}
