import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookFactory } from '../book-factory';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  private book: Book;

  constructor() {
    this.book = new Book();
  }

  ngOnInit() {
    this.book.autor = 'Eduardo Mendoza';
    this.book.titulo = 'Sin noticias de Gurb';
  }

}
