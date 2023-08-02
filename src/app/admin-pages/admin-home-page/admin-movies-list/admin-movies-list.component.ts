import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/features/movies/interfaces/movie';
import { MovieService } from 'src/app/features/movies/services/movie.service';

@Component({
  selector: 'app-admin-movies-list',
  templateUrl: './admin-movies-list.component.html',
  styleUrls: ['./admin-movies-list.component.css']
})
export class AdminMoviesListComponent implements OnInit {
  @Input() movie?: Movie[];
  movieList?: Movie[];
  
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {   
    this.movieService.getAllMovies().subscribe((response: any) => {
      this.movieList = response;
    });
  }
}
