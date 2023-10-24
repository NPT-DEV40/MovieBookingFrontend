import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  faCircleChevronRight = faCircleChevronRight;
  movieList?: Movie[];
  showChatBox: boolean = false;

  constructor(
    private auth: AuthService,
    private movieService: MovieService,
    ) { }

}
