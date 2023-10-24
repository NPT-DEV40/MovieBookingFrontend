import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass, faFilm, faCartShopping } from '@fortawesome/free-solid-svg-icons';


const handleReturnHome = () =>{

}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faFilm = faFilm;
  faCartShopping = faCartShopping;
  handleReturnHome = handleReturnHome;
  constructor(private router: Router) {}

  goToHomePage() {
    this.router.navigateByUrl('/');
  }
}
