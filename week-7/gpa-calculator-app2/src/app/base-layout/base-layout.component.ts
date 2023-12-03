//Danielle Taplin
//base-layout.component.ts
//11/26/23
//base-layout component

//import from angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

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
  constructor(private cookieService: CookieService, private router: Router) {
    //set assignment name
    this.assignment = 'Exercise 7.2 - Reactive Forms'
   }

  ngOnInit(): void {
  }
  signOut() {
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }
}
