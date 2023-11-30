//Danielle Taplin
//book-list.component.ts
//11/18/23
//book-list component for in n out books p2

//import Component, IBook, Observable, BookService, and dialog components
import { Component, OnInit } from '@angular/core';
import { IBook } from '../../../book.interface';
import { Observable } from 'rxjs'
import { BooksService } from '../../../books.service';
import { MatDialog } from '@angular/material/dialog';
import { BookDetailsDialogComponent } from '../book-details-dialog/book-details-dialog.component';


//create and export book list component
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  //create observable array of IBooks
  books: Observable<IBook[]>;

  //Create header filled with book data values
  header: Array<string> = ['isbn', 'title', 'numOfPages', 'authors']

  //create book variable of type IBook
  book: IBook;

  //create constructor filling book array by calling getBooks()
  constructor(private booksService: BooksService, private dialog: MatDialog) {
    this.books = this.booksService.getBooks();
  }

  ngOnInit(): void {
  }

  //define function for outputting book information based on the provided isbn number
  showBookDetails(isbn: string){
    //set book object equal to selected book
    this.book = this.booksService.getBook(isbn);

    //create dialog ref object with book value set to match current book
    const dialogRef = this.dialog.open(BookDetailsDialogComponent, {
      data: {
        book: this.book
      },
      //set disableClose to true; width to 800px
      disableClose: true,
      width: '800px'
    })

    //output book data
    console.log(this.book)

    //when dialog box is closed, reset value of book to null
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'confirm') {
        this.book = null;
      }
    });
  }
}
