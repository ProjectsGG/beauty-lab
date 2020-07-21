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
    },
    {
      icon: 'wallet',
      name: 'Medics',
      redirectTo: '/homemedic'
    },
    {
      icon: 'color-wand',
      name: 'Before and After',
      redirectTo: '/admbefore-after'
    },
    {
      icon: 'color-wand',
      name: 'Reported Posts',
      redirectTo: '/admsocial'
    },
    {
      icon: 'home',
      name: 'BeautyLab',
      redirectTo: '/tabs/home'
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
