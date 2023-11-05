//Danielle Taplin
//app.component.ts
//11/4/23
//home component

//import component, oninit, and activated route from Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//create home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//xxport Home Component class
export class HomeComponent implements OnInit {

  //create constructor that determines if the user is logged in
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
