import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  data: any[];

  constructor(private hero: HeroService) {}

  ngOnInit() {
    this.data = [
      {
        icon: 'person',
        key: 'Name',
        value: this.hero.getUser().nombres
      },
      {
        icon: 'person',
        key: 'Surnames',
        value: this.hero.getUser().apellidos
      },
      {
        icon: 'call',
        key: 'Phone',
        value: this.hero.getUser().movil
      },
      {
        icon: 'mail',
        key: 'Mail',
        value: this.hero.getUser().email
      }
    ];
  }

}
