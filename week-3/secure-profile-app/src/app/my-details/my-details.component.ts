//Danielle Taplin
//my-details.component.ts
//10/27/23
//typescript for my-details component

import { Component, OnInit } from '@angular/core';

//export and declare class Person
export default class Person{

  //declare string variables for full name, fav food and fav color
  fullName: string
  favoriteFood: string
  favoriteColor: string

  //declare keywords array with requested string values
  keywords = ["#TypeScript", "#2020", "#CodingWithAngular", "#ngOmaha"]

  //create constructor to initialize full name, fav food and fav color
  constructor(fullName: string, favoriteFood: string, favoriteColor: string){
    this.fullName = fullName;
    this.favoriteFood = favoriteFood;
    this.favoriteColor = favoriteColor;
  }

  //declare toString method outputting results to console
  toString(){
    console.log(`\n Full Name: ${this.fullName} \n Favorite Food: ${this.favoriteFood} \n Favorite Color: ${this.favoriteColor}`)
  }
}

//create and export my-details component
@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  //declare person object set as my profile
  myProfile: Person;

  //create constructor for component w/ info
  constructor() {
    this.myProfile = new Person("Danielle Taplin", "Tacos", "Pink");
    this.myProfile.toString();
   }

  ngOnInit(): void {
  }

}
