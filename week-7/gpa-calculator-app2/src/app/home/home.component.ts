//Danielle Taplin
//base-layout.component.ts
//11/29/23
//home component

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';

//export the home component
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //create transcript entry object variable
  transcriptEntry: ITranscript;

  //create array containing each letter grade and empty array for transcript values
  selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
  transcriptEntries: Array<ITranscript> = [];

  //gpa total set to 0
  gpaTotal: number = 0;

  constructor() {
    //cast transcript entry variable as Itranscript
    this.transcriptEntry = {} as ITranscript
   }

  ngOnInit(): void {
  }

  //create function to store transcript entries
  saveEntry(){
    //push new transcript entries to array
    this.transcriptEntries.push(this.transcriptEntry)

    //cast transcriptEntry as Itranscript
    this.transcriptEntry = {} as ITranscript
  }


  //create function calculating GPA
  calculateResults(){
    //GPA set to 0
    let gpa: number = 0;

    //for each entry on array add corresponding gpa value to gpa entries
    for (let entry of this.transcriptEntries){
      switch(entry.grade){
        case 'A':
          gpa += 4.0;
          break;
        case 'A-':
          gpa += 3.7;
          break;
        case 'B+':
          gpa += 3.33;
          break;
        case 'B':
          gpa += 3.00;
          break;
        case 'B-':
          gpa += 2.70;
          break;
        case 'C+':
          gpa += 2.30;
          break;
        case 'C-':
          gpa += 1.70;
          break;
        case 'D+':
          gpa += 1.30;
          break;
        case 'D':
          gpa += 1.00;
          break;
        case 'D-':
          gpa += 0.70;
          break;
        default:
          gpa += 0.00;
          break;
      }

      //divide gpa total by number of transcript entries
      this.gpaTotal = gpa / this.transcriptEntries.length
    }
  }



  //create function to clear entries in transcript
  clearEntries(){
    //transcript array set to empty and gpa total set to 0
    this.transcriptEntries = []
    this.gpaTotal = 0;
  }

}
