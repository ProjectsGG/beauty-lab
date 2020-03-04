import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeadmin',
  templateUrl: './homeadmin.page.html',
  styleUrls: ['./homeadmin.page.scss'],
})
export class HomeadminPage implements OnInit {

  backoffice: Componente[] = [
    {
      icon: 'flask',
      name: 'Plans',
      redirectTo: '/admplans'
    },
    {
      icon: 'medkit',
      name: 'Procedures',
      redirectTo: '/admprocedures'
    },
    {
      icon: 'bed',
      name: 'Rooms',
      redirectTo: '/admrooms'
    },
    {
      icon: 'wallet',
      name: 'Reservation',
      redirectTo: '/admreservas'
    }
  ];


  constructor() { }

  ngOnInit() {
  }


}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}
