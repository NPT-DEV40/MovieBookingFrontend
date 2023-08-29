import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { MovieComponent } from 'src/app/features/movies/components/movie/movie.component';
import { AppModule } from 'src/app/app.module';
import { FilmComponent } from 'src/app/features/film/film.component';
import { CinemaComponent } from 'src/app/features/cinema/cinema.component';


@NgModule({
  declarations: [ HomePageComponent, MovieComponent, HeaderComponent, FooterComponent, FilmComponent, CinemaComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class HomePageModule {
  faCircleChevronRight = faCircleChevronRight;
}