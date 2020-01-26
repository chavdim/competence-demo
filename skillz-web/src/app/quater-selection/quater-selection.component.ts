import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quater-selection',
  templateUrl: './quater-selection.component.html',
  styleUrls: ['./quater-selection.component.css']
})
export class QuaterSelectionComponent implements OnInit {
  selectedTo: any = '2019 Q4';
  selectedFrom: any = '2019 Q3';
  constructor() {
  }

  ngOnInit() {
  }

}
