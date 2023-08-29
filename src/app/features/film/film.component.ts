import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import * as classNames from 'classnames';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  @Input() size : string |undefined;

  classNames = classNames;
}
