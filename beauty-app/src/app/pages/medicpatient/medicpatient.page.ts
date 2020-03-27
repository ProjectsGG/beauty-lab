import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicpatient',
  templateUrl: './medicpatient.page.html',
  styleUrls: ['./medicpatient.page.scss'],
})
export class MedicpatientPage implements OnInit {


  data = [{
    info: 'Name',
    value: 'Miguel Angel'
  },
{
  info: 'Surname',
  value: 'Garcia Rojas'
},
{
  info: 'Blood Type',
  value: 'O-'
},
{
  info: 'Height',
  value: '1.55'
},
{
  info: 'Weight',
  value: '90 kg'
}];

  cardinfo = [{
    question: 'Are you taking medication?.',
    result: 'No'
  },
{
  question: 'Are you taking allucinogen?.',
  result: 'Yes'
},
{
  question: 'Are you allergic?.',
  result: 'No'
},
{
  question: 'Previous surgery general.',
  result: 'Breast'
},
{
  question: 'Previous plastic surgery.',
  result: 'Heart'
},
{
  question: 'Heart Desease.',
  result: 'Yes'
},
{
  question: 'Diabetes.',
  result: 'No'
},
{
  question: 'Vih Sida.',
  result: 'Yes'
}
];
  constructor() { }

  ngOnInit() {
  }

}
