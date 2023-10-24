import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchPageRoutingModule } from './search-page-routing.module';
import { SearchPageComponent } from './search-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { SlideModule } from 'src/app/features/slide/slide.module';
import { BuyTicketModule } from 'src/app/features/buy-ticket/buy-ticket.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilmModule } from 'src/app/features/film/film.module';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';


@NgModule({
  declarations: [SearchPageComponent],
  imports: [
    CommonModule,
    SearchPageRoutingModule,
    HeadersModule,
    FootersModule,
    SlideModule,
    BuyTicketModule,
    FontAwesomeModule,
    FilmModule,
    ButtonSupportModule
  ]
})
export class SearchPageModule { }
