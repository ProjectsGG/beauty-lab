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

  ngOnInit() {
  }
}
