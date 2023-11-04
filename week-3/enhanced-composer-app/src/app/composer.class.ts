//Danielle Taplin
//composer.class.ts
//11/4/23
//composer class

//import IComposer interface
import { IComposer } from './composer.interface';

//create and export composer class
export class Composer {

  //create array of IComposer objects
  composers: Array<IComposer>;

  //create constructor initializing array with composers
  constructor() {
    this.composers = [
      {
        composerId: 100, fullName: "Richard Wagner", genre: "Classical"
      },
      {
        composerId: 101, fullName: "Johann Sebastian Bach", genre: "Classical"
      },
      {
        composerId: 102, fullName: "Wolfgang Amadeus Mozart", genre: "Classical"
      },
      {
        composerId: 103, fullName: "Johannes Brahms", genre: "Classical"
      },
      {
        composerId: 104, fullName: "Claude Debussy", genre: "Classical"
      }
    ]
  }

  //declare method returning all composers
  getComposers() {
    //return array of composers
    return this.composers;
  }

  //declare method for returning specified composer based on id
  getComposer(composerId: number) : IComposer {
    //for every composer in the array:
    for (let composer of this.composers) {
      //if the composer Id = Id parameter, return composer
      if (composer.composerId === composerId) {
        return composer;
      }
    }
  }
}
