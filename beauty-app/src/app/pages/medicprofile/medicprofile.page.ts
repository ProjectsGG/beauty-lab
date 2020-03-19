import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicprofile',
  templateUrl: './medicprofile.page.html',
  styleUrls: ['./medicprofile.page.scss'],
})
export class MedicprofilePage implements OnInit {

  medicdata = [{
    title: 'Name',
    value: 'Miguel Angel',
    size: '6'
  },
  {
  title: 'Surname',
  value: 'Garcia Rojas',
  size: '6'
  },
  {title: 'Email',
  value: 'miguelhito54@gmail.com',
  size: '12'
  },
  {
  title: 'Phone Number',
  value: '+54 3043279161',
  size: '12'
},
{
  title: 'Speciallity',
  value: 'Liposuction',
  size: '12'
},
{
  title: 'Years Experience',
  value: '4',
  size: '4'
},
{
  title: 'Clinic',
  value: 'Clinica de Medellin',
  size: '8'
},

];
  constructor() { }

  ngOnInit() {
  }

}
