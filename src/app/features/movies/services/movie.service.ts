import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie';
import { map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getAllMovies() {
    return this.http.get(environment.api + 'movie/all-movies', httpOptions)
        .pipe(map((response:any) => {
          // Transfer response to Movie[]
          let movies: Movie[] = [];
          response.forEach((movie: any) => {
            return movies.push({
              name: movie.movieName,
              description: movie.movieDescription,
              genre: movie.movieGenre,
              language: movie.movieLanguage,
              director: movie.movieDirector,
              releaseDate: movie.movieReleaseDate,
              trailer: movie.movieTrailer,
              image: movie.movieImage,
              rating: movie.movieRating,
              length: movie.movieLength,
              isShowing: false
            });
          });
          return movies;
        }));
  }
}
