import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';
import { BuyTicketComponent } from 'src/app/features/buy-ticket/buy-ticket.component';
import { NewReleasesPageRoutingModule } from './new-releases-page-routing.module';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { FilmComponent } from 'src/app/features/film/film.component';
import { SlideComponent } from 'src/app/features/slide/slide.component';
import { HomePageModule } from '../home-page/home-page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewReleasesPageComponent } from './new-releases-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { BuyTicketModule } from 'src/app/features/buy-ticket/buy-ticket.module';
import { SlideModule } from 'src/app/features/slide/slide.module';


@NgModule({
  declarations: [
    NewReleasesPageComponent,
  ],
  imports: [
    CommonModule,
    NewReleasesPageRoutingModule,
    FontAwesomeModule,
    HeadersModule,
    FootersModule,
    BuyTicketModule,
    SlideModule
  ],
  exports: [
  ]
})
export class NewReleasesPageModule { }
