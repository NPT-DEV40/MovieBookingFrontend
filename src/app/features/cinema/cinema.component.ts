import { Component, Input, NgModule } from '@angular/core';
import * as classNames from 'classnames';


@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent {
  @Input() size : string |undefined;

  classNames = classNames;
}
