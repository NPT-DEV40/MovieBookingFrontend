import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

  @Input() movies?: Movie[];
  @Output() movieSelected?: EventEmitter<Movie>;

  private currentMovie?: Movie;

  constructor() {
    this.movieSelected = new EventEmitter<Movie>();
  }

  clicked(movie:Movie) {
    this.currentMovie = movie;
    this.movieSelected?.emit(movie);
  }

  isSelected(movie:Movie) {
    if(!movie || !this.currentMovie) {
      return false;
    }
    return movie.name === this.currentMovie.name;
  }
}
