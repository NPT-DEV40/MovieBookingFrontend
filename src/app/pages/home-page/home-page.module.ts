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
import { SlideComponent } from 'src/app/features/slide/slide.component';
import { BuyTicketComponent } from 'src/app/features/buy-ticket/buy-ticket.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MaterialModule } from 'src/app/materials/material.module';


@NgModule({
  declarations: [ HomePageComponent, MovieComponent, 
    HeaderComponent, FooterComponent, FilmComponent, CinemaComponent, SlideComponent, BuyTicketComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class HomePageModule {
  faCircleChevronRight = faCircleChevronRight;
}