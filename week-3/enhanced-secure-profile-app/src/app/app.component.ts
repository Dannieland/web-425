//Danielle Taplin
//app.component.ts
//10/27/23
//typescript for main app component

//import component from angular
import { Component } from '@angular/core';

//create app components
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//export and declare appcomponent class
export class AppComponent {



  //declare variable to hold the assignment name
  assignment = 'Secure Profile App';
}
