import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicform',
  templateUrl: './medicform.page.html',
  styleUrls: ['./medicform.page.scss'],
})
export class MedicformPage implements OnInit {

  constructor() { }
  // blood type
  Rhs = ['O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'];

  titleInp = ['are you taking medication?',
              'are you taking allucinogen',
              'are you allergic',
              'previous surgery general',
              'previous plastic surgery '];

checkList = [
            {title: 'Heart Desease',
             size: '6'
            },

            {title: 'Diabetes',
             size: '6'
            },
            {title: 'VIH Sida',
             size: '6'
            },

            {title: 'High Pression',
             size: '6'
            },

            {title: 'Previous plastic surgery',
             size: '12'
            },
          ];
  ngOnInit() {
}
}
