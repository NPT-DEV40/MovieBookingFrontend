import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomePageRoutingModule } from './home-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page.component';
import { MovieComponent } from 'src/app/features/movies/components/movie/movie.component';
import { FilmComponent } from 'src/app/features/film/film.component';
import { CinemaComponent } from 'src/app/features/cinema/cinema.component';
import { SlideComponent } from 'src/app/features/slide/slide.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from 'src/app/materials/material.module';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { BuyTicketModule } from 'src/app/features/buy-ticket/buy-ticket.module';
import { SlideModule } from 'src/app/features/slide/slide.module';
import { CinemaModule } from 'src/app/features/cinema/cinema.module';
import { FilmModule } from 'src/app/features/film/film.module';


@NgModule({
  declarations: [ HomePageComponent, MovieComponent, ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    MaterialModule,
    HeadersModule,
    FootersModule,
    BuyTicketModule,
    SlideModule,
    CinemaModule,
    FilmModule
  ]
})
export class HomePageModule {
  faCircleChevronRight = faCircleChevronRight;
}