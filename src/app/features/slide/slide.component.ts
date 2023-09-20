import { Component, Input, NgModule } from '@angular/core';
import * as classNames from 'classnames';


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})

export class SlideComponent {
  @Input() size : string |undefined;
  classNames = classNames;
}
