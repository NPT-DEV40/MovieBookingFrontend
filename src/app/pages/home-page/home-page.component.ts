import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/features/movies/services/product.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(
    private auth: AuthService,
    private productService: ProductService
    ) { }
  logout() {
    this.auth.logout();
  }

  testMovie() {
    this.productService.getAllProducts();
  }
}
