import { Component } from '@angular/core';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.component.html',
  styleUrls: ['./thanks-page.component.css']
})
export class ThanksPageComponent {
  faCircleCheck = faCircleCheck;
}
