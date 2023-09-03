import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MaterialModule } from './materials/material.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { HeaderComponent } from './features/header/header.component';
import { FooterComponent } from './features/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilmComponent } from './features/film/film.component';
import { CinemaComponent } from './features/cinema/cinema.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';
import { TicketComponent } from './features/ticket/ticket.component';
import { BuyTicketComponent } from './features/buy-ticket/buy-ticket.component';
import { SlideComponent } from './features/slide/slide.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    FilmComponent,
    CinemaComponent,
    ThanksPageComponent,
    TicketComponent,
    BuyTicketComponent,
    SlideComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    MatSelectModule,
    SlickCarouselModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
