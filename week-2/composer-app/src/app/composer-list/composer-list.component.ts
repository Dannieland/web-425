//Danielle Taplin
//composer-list.components.ts
//10/28/23
//typescript composer list component

import { Component, OnInit } from '@angular/core';

//define and export composer
export default class Composer{

//declare fullName and genre string variables
  fullName: string;
  genre: string;

  //create constructor to initialize fullName and genre
  constructor(fullName: string, genre: string){
    this.fullName = fullName;
    this.genre = genre;
  }
}

//create and export component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //declare array of composer objects as part of the component
  composers: Array<Composer>;

  //fill composers array with composer data
  constructor() {
    this.composers = [
      new Composer("Richard Wagner", "Classical"),
      new Composer("Johann Sebastian Bach", "Classical"),
      new Composer("Wolfgang Amadeus Mozart", "Classical"),
      new Composer("Johannes Brahms", "Classical"),
      new Composer("Claude Debussy", "Classical")
    ]
   }

  ngOnInit(): void {
  }

}
