import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  data: any[];

  constructor() {}

  ngOnInit() {
    const data = JSON.parse(localStorage.getItem('user'));
    this.data = [
      {
        icon: 'person',
        key: 'Name',
        value: data.nombres
      },
      {
        icon: 'person',
        key: 'Surnames',
        value: data.apellidos
      },
      {
        icon: 'call',
        key: 'Phone',
        value: data.movil
      },
      {
        icon: 'mail',
        key: 'Mail',
        value: data.email
      }
    ];
  }

}
