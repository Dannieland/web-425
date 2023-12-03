import { Component, OnInit, Input } from '@angular/core';

//export gpa component
@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  //create input variable holding gpaTotal
  @Input() gpaTotal: number

  constructor() { }

  ngOnInit(): void {
  }

}
