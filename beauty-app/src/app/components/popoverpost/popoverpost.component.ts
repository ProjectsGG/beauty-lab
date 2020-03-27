import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popoverpost',
  templateUrl: './popoverpost.component.html',
  styleUrls: ['./popoverpost.component.scss'],
})
export class PopoverpostComponent implements OnInit {
  constructor() { }
options = [ {
  text: 'Save',
  op: '1'
},
{
  text: 'Share',
  op: '2'
},
{
  text: 'Report',
  color: 'danger',
  op: '3'
},
];
  ngOnInit() {}

}
