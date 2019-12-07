import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigantionPannelComponent } from './navigantion-pannel/navigantion-pannel.component';



@NgModule({
  declarations: [NavigantionPannelComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigantionPannelComponent]
})
export class NavigationModule { }
