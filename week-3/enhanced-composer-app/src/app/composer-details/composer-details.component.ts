//Danielle Taplin
//composer-details.components.ts
//11/4/23
//composer details component

//import Component, OnInit, IComposer, Composer, and Activated Route
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { Composer } from '../composer.class';
import { ActivatedRoute } from '@angular/router';

//create composer details component
@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
//create and export class for the details component
export class ComposerDetailsComponent implements OnInit {

  //create composer ID and composer variables
  composerId: number;
  composer: IComposer;

  //create constructor with route passed into its parameters
  constructor(private route: ActivatedRoute) {
    //access composer ID selected when the user navigates to composer details page
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId'), 10);

    //if composer ID is passed found
    if(this.composerId){
      //set the selected composer
      this.composer = new Composer().getComposer(this.composerId)
    }
   }

  ngOnInit(): void {
  }

}
