import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.page.html',
  styleUrls: ['./terms.page.scss'],
})
export class TermsPage implements OnInit {

  cardTerms = [
    {
      header: 'Terms and Conditions',
      content: 'Lorem ipsum dolor sit amet consectetur' +
                'adipisicing elit. Quae architecto, numquam' +
                'aperiam tenetur consequuntur deserunt voluptatem' +
                'incidunt ea saepe ex fugit quaerat odit dignissimos dolores culpa natus quo laborum ut.'
    },
    {
      header: 'Policy and privacy',
      content: 'Lorem ipsum dolor sit amet consectetur' +
                'adipisicing elit. Quae architecto, numquam' +
                'aperiam tenetur consequuntur deserunt voluptatem' +
                'incidunt ea saepe ex fugit quaerat odit dignissimos dolores culpa natus quo laborum ut.'
    },
    {
      header: 'Something else',
      content: 'Lorem ipsum dolor sit amet consectetur' +
                'adipisicing elit. Quae architecto, numquam' +
                'aperiam tenetur consequuntur deserunt voluptatem' +
                'incidunt ea saepe ex fugit quaerat odit dignissimos dolores culpa natus quo laborum ut.'
    },
    {
      header: 'Something else',
      content: 'Lorem ipsum dolor sit amet consectetur' +
                'adipisicing elit. Quae architecto, numquam' +
                'aperiam tenetur consequuntur deserunt voluptatem' +
                'incidunt ea saepe ex fugit quaerat odit dignissimos dolores culpa natus quo laborum ut.'
    },
  ];
  automaticClose(){
    debugger
  }

  constructor() {
    this.cardTerms[0].open = true;
   }

  ngOnInit() {
  }
  toggleSection( header ) {
    if (this.automaticClose && this.cardTerms) 
    {

    }
  }
}
