import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicdone',
  templateUrl: './medicdone.page.html',
  styleUrls: ['./medicdone.page.scss'],
})
export class MedicdonePage implements OnInit {

    pypdone = [{
      name: 'Booty Plan',
      date: 'Dec 22 - Jan 2'
    },
    {
      name: 'Super Model Plan',
      date: 'Dec 22 - Jan 2'
    },
    {
      name: 'Booty Plan',
      date: 'Dec 22 - Jan 2'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
