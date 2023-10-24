import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReleasesPageRoutingModule } from './new-releases-page-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewReleasesPageComponent } from './new-releases-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { BuyTicketModule } from 'src/app/features/buy-ticket/buy-ticket.module';
import { SlideModule } from 'src/app/features/slide/slide.module';
import { FilmModule } from 'src/app/features/film/film.module';
import { IconDownCustomModule } from 'src/app/features/icon-down-custom/icon-down-custom.module';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';


@NgModule({
  declarations: [
    NewReleasesPageComponent
  ],
  imports: [
    CommonModule,
    NewReleasesPageRoutingModule,
    FontAwesomeModule,
    HeadersModule,
    FootersModule,
    BuyTicketModule,
    SlideModule,
    FilmModule,
    IconDownCustomModule,
    ButtonSupportModule
  ],
  exports: [
  ]
})
export class NewReleasesPageModule { }
