import { Component, Input, NgModule } from '@angular/core';
import * as classNames from 'classnames';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() size : string |undefined;

  classNames = classNames;
}
