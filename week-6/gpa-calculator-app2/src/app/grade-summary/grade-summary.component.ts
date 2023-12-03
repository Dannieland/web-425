//Danielle Taplin
//grade-summary.component.ts
//11/29/23
//grade summary component

import { Component, OnInit, Input } from '@angular/core';

//export grade summary component
@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  //create input variables for grade and course
  @Input() grade: string;
	@Input() course: string


  //blank constructor
  constructor() { }

  ngOnInit(): void {
  }

}
