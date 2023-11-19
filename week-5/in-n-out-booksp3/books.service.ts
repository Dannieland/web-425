//Danielle Taplin
//books.service.ts
//11/18/23
//book service for in n out books p2

//Import Injectable, Observable, map, of, and the IBook interface
import { Injectable } from '@angular/core';
import { Observable } from "rxjs"
import { map } from "rxjs/operators"
import { of } from "rxjs"
import { IBook } from './book.interface';

//Create and export the books service
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  //Initialize an array of IBook items
  books: Array<IBook>;

  //Create the array of IBook items within the constructor
  constructor() {
    this.books = this.books = [
      {
        isbn: '0316160172',
        title: 'Twilight',
        description: "Isabella Swan's move to Forks, a small, perpetually rainy town in Washington, could have been the most boring move she ever made. But once she meets the mysterious and alluring Edward Cullen, Isabella's life takes a thrilling and terrifying turn.",
        numOfPages: 544,
        authors: ['Stephanie Meyer']
      },
      {
        isbn: '0316160199',
        title: 'New Moon',
        description: "For Bella Swan, there is one thing more important than life itself: Edward Cullen. But being in love with a vampire is even more dangerous than Bella could ever have imagined. Edward has already rescued Bella from the clutches of one evil vampire, but now, as their daring relationship threatens all that is near and dear to them, they realize their troubles may be just beginning.",
        numOfPages: 608,
        authors: ['Stephanie Meyer']
      },
      {
        isbn: '0316160202',
        title: 'Eclipse',
        description: "As Seattle is ravaged by a string of mysterious killings and a malicious vampire continues her quest for revenge, Bella once again finds herself surrounded by danger. In the midst of it all, she is forced to choose between her love for Edward and her friendship with Jacob -- knowing that her decision has the potential to ignite the ageless struggle between vampire and werewolf.",
        numOfPages: 629,
        authors: ['Stephanie Meyer']
      },
      {
        isbn: '031606792X',
        title: 'Breaking Dawn',
        description: "This astonishing, breathlessly anticipated conclusion to the Twilight Saga illuminates the secrets and mysteries of this spellbinding romantic epic.",
        numOfPages: 756,
        authors: ['Stephanie Meyer']
      },
      {
        isbn: '0316629456',
        title: 'Midnight Sun',
        description: "When Edward Cullen and Bella Swan met in Twilight, an iconic love story was born. But until now, fans have heard only Bella's side of the story. At last, readers can experience Edward's version in the long-awaited companion novel, Midnight Sun.",
        numOfPages: 832,
        authors: ['Stephanie Meyer']
      }
    ]
   }

   //create function returning array of books
   getBooks(): Observable<IBook[]> {
    return of(this.books);
  }


  //create function that loops over the array, accepts an isbn number, and returns matching book
  getBook(isbn: string): IBook {
    for (let book of this.books) {
      if (book.isbn === isbn) {
        return book;
      }
    }
    return {} as IBook;
  }
}
