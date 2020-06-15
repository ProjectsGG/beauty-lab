import { Component, OnInit, Input } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { User } from '../../interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  constructor(public hero: HeroService, private router: Router) { }

  ngOnInit() {
  }

  navigate() {
    if (this.hero.auth) {
      this.router.navigate(['/profile'])
    }
  }
}
