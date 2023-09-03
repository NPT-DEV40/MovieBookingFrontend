import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
const slides = [ {img: "assets/images/slide1.jpg"}, {img: "assets/images/slide2.jpg"}, {img: "assets/images/slide3.jpg"} ];
const slideConfig = {items: 3, dots: true, nav: true}; 

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  animations: [
    trigger('slideInRight', [ // add a double quote here
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate('500ms ease-out', style({ transform: 'translateX(0)' })),
  ]),
  transition(":leave", [
    animate('500ms ease-out', style({ transform: 'translateX(100%)' })),
  ])
])]})

export class SlideComponent {
  slides = slides;
  slideConfig = slideConfig ;
  imageVisible = true;

  toggleImage() {
    this.imageVisible == false ? this.imageVisible = true : this.imageVisible = false
  }
}
