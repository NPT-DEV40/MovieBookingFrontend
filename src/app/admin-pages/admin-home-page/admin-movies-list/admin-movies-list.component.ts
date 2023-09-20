import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/services/movie.service';

@Component({
  selector: 'app-admin-movies-list',
  templateUrl: './admin-movies-list.component.html',
  styleUrls: ['./admin-movies-list.component.css']
})
export class AdminMoviesListComponent implements OnInit {
  @Input() movie?: Movie[];
  movieList?: String[];

  
  constructor(private movieService: MovieService) {
    this.movieList = ["a movie", "b movie", "c movie", "d movie", "e movie", "f movie", "g movie", "h movie", "i movie", "j movie", "k movie",];
  }

  ngOnInit(): void {   
    // this.movieService.getAllMovies().subscribe((response: any) => {
    //   this.movieList = response;
    // });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    if(scrollTop + windowHeight >= documentHeight) {
      document.getElementsByClassName('arrow-container')[0].setAttribute('style', 'visibility: hidden');
    } else {
      document.getElementsByClassName('arrow-container')[0].setAttribute('style', 'visibility: visible');
    }
  }
}
