import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CinemaComponent } from './cinema.component';



@NgModule({
  declarations: [CinemaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CinemaComponent
  ]
})
export class CinemaModule { }
