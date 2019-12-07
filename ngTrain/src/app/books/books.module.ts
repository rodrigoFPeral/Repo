import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksOverviewComponent } from './books-overview/books-overview.component';
import { BookFactory } from './book-factory';
import { Book } from './book';



@NgModule({
  declarations: [BookDetailsComponent, BooksOverviewComponent],
  imports: [
    CommonModule
  ],
  exports: [BookDetailsComponent, BooksOverviewComponent]
})
export class BooksModule { }
