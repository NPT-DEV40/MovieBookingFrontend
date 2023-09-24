import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminMoviesListService } from './services/admin-movies-list.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.css']
})
export class AdminHomePageComponent {
  categories$: Observable<Array<string>>;

  constructor(private adminHomeService: AdminMoviesListService) {
    this.categories$ = adminHomeService.categories$;
  }

  onScrollingFinished() {
    console.log('load more');
    // set timeout 1000ms before loadMore is called
    setTimeout(() => {
      this.adminHomeService.loadMore();
    }, 1000);
  }
}
