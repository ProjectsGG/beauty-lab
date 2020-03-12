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

  titleInp = ['Are you taking medication?.',
              'Are you taking allucinogen?.',
              'Are you allergic?.',
              'Previous surgery general?.',
              'Previous plastic surgery?.'];

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

            {title: 'VIH Sida',
             size: '12'
            },
          ];
  ngOnInit() {
}
}
