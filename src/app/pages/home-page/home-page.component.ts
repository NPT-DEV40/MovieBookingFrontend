import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { HeaderComponent } from 'src/app/features/header/header.component';
import { FooterComponent } from 'src/app/features/footer/footer.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(private auth: AuthService) { }
  logout() {
    this.auth.logout();
  }
}
