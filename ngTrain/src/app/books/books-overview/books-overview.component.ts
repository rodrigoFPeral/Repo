import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookFactory } from '../book-factory';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {
  libro1: Book;
  bookList: Book[];

  constructor() {
    this.bookList = new Array<Book>();
   }

  ngOnInit() {
    this.bookList = BookFactory.createBooks();
  }

}
