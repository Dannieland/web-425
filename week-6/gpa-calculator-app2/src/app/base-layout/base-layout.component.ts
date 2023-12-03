//Danielle Taplin
//base-layout.component.ts
//11/26/23
//base-layout component

//import from angular
import { Component, OnInit } from '@angular/core';

//export base-layout component
@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {

  //define assignment string variable
  assignment: string;

  //declare constructor
  constructor() {
    //set assignment name
    this.assignment = 'Assignment 6.4 - Input Properties'
   }

  ngOnInit(): void {
  }

}
