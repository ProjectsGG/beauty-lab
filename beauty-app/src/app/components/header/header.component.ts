import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;

  private user: User;
  constructor(private hero: HeroService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    const dataLs = JSON.parse(localStorage.getItem('user'));
    if (dataLs === null) {
      this.user = null;
    } else {
      this.user = dataLs;
    }
  }
}
