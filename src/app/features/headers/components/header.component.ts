import { Component } from '@angular/core';
import { faMagnifyingGlass, faFilm, faCartShopping } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faFilm = faFilm;
  faCartShopping = faCartShopping;
}
