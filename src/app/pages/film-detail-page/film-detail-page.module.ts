import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmDetailPageRoutingModule } from './film-detail-page-routing.module';
import { FilmDetailPageComponent } from './film-detail-page.component';
import { BuyTicketModule } from 'src/app/features/buy-ticket/buy-ticket.module';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';


@NgModule({
  declarations: [
    FilmDetailPageComponent
  ],
  imports: [
    CommonModule,
    FilmDetailPageRoutingModule,
    BuyTicketModule,
    HeadersModule,
    FootersModule,
    ButtonSupportModule
  ]
})
export class FilmDetailPageModule { }
