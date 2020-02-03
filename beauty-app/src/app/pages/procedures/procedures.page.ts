import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-procedures',
  templateUrl: './procedures.page.html',
  styleUrls: ['./procedures.page.scss'],
})
export class ProceduresPage implements OnInit {

  constructor() { }

  procedures = [
    {image: '360lipo.jpg' , description : '360Lipo'},
    {image: 'abs.jpg', description : 'ABS'},
    {image: 'booty.jpg', description : 'Booty'},
    {image: 'breast.jpg', description : 'Breast'},
    {image: 'regularlipo.jpg', description : 'Regular Lipo'},
    {image: 'nose.jpg', description : 'Nose'},
    {image: 'teeths.jpg', description : 'Teeths'},
    {image: 'cheecks.jpg', description : 'Cheeks'},
    {image: 'chin.jpg', description : 'Chin'},
    {image: 'botox.jpg' , description : 'Botox'},
    {image: 'eyebrow.jpg' , description : 'Cejas'}
  ];

  ngOnInit() {
  }

}
