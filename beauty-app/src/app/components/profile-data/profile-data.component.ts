import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss'],
})
export class ProfileDataComponent implements OnInit {
  data: any[] = [
    {
      icon: 'person',
      key: 'Name',
      value: 'Nancy'
    },
    {
      icon: 'person',
      key: 'Surnames',
      value: 'Dabolio Ferbug'
    },
    {
      icon: 'call',
      key: 'Phone',
      value: '00-1-212-324-4152'
    },
    {
      icon: 'mail',
      key: 'Mail',
      value: 'nancy03@gmail.com'
    }
  ];
  constructor() { }

  ngOnInit() {}

}
