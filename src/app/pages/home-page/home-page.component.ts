import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/services/movie.service';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  movieList?: Movie[];

  constructor(
    private auth: AuthService,
    private movieService: MovieService,
    ) { }

  ngOnInit(): void {
    // this.movieService.getAllMovies().subscribe((response: any) => {
    //   this.movieList = response;
    //   console.log(this.movieList);
    // });
    // console.log("test movie");
  }
}
