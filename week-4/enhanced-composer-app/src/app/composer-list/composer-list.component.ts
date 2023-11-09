//Danielle Taplin
//composer-list.components.ts
//11/4/23
//typescript composer list component

//import component, IComposer, Composer class and oninit
import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


//create and export component for composer-list
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  //define array of IComposer
  composers: Array<IComposer>

   //create a constructor for the component
   constructor(private composerService: ComposerService) {
    //set the composer array to equal the value returned by getComposers
    this.composers = this.composerService.getComposers()
 }

ngOnInit(): void {
}

}
