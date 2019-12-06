import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookFactory } from '../book-factory';

@Component({
  selector: 'app-books-overview',
  templateUrl: './books-overview.component.html',
  styleUrls: ['./books-overview.component.css']
})
export class BooksOverviewComponent implements OnInit {

  bookList: Book[];

  constructor() { }

  ngOnInit() {
    this.bookList = BookFactory.createBooks();
  }

}
