import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicavailable',
  templateUrl: './medicavailable.page.html',
  styleUrls: ['./medicavailable.page.scss'],
})
export class MedicavailablePage implements OnInit {

  pypdone = [{
    name: '360 lipo',
    date: '12 feb - 22 feb'
  },
  {
    name: 'Abs',
    date: '2 jan - 20 jan'
  },
{
  name: 'Botox',
  date: '2 mar - 6 mar'
},
{
  name: 'Nose',
  date: '3 feb - 10 feb'
}];
  constructor() { }

  ngOnInit() {
  }

}
