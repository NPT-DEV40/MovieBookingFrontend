import { Component } from '@angular/core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent {
  faPencil = faPencil;
}
