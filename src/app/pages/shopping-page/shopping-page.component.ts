import { Component } from '@angular/core';
import { faCircleChevronDown, faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-shopping-page',
  templateUrl: './shopping-page.component.html',
  styleUrls: ['./shopping-page.component.css']
})
export class ShoppingPageComponent {
  faCircleChevronDown = faCircleChevronDown;
  faCircleChevronRight = faCircleChevronRight;
}
