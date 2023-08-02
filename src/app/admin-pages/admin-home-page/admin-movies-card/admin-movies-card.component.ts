import { Component, Input } from '@angular/core';
import * as classNames from 'classnames';

@Component({
  selector: 'app-admin-movies-card',
  templateUrl: './admin-movies-card.component.html',
  styleUrls: ['./admin-movies-card.component.css']
})
export class AdminMoviesCardComponent {
  @Input() size : string |undefined;

  classNames = classNames;
}
