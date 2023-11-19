//Danielle Taplin
//book-list.component.ts
//11/18/23
//book-list component for in n out books p2

import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../book.interface';
import { Observable } from 'rxjs'
import { BooksService } from '../../../books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  books: Observable<IBook[]>;
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']
  book: IBook;

  constructor(private booksService: BooksService) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  showBookDetails(isbn: string){
    this.book = this.booksService.getBook(isbn);
    console.log(this.book)
  }

}
