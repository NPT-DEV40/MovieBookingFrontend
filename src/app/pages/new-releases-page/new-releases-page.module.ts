import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';
import { BuyTicketComponent } from 'src/app/features/buy-ticket/buy-ticket.component';
import { NewReleasesPageRoutingModule } from './new-releases-page-routing.module';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { FilmComponent } from 'src/app/features/film/film.component';
import { SlideComponent } from 'src/app/features/slide/slide.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, FilmComponent, SlideComponent, BuyTicketComponent],
  imports: [
    CommonModule,
    NewReleasesPageRoutingModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ]
})
export class NewReleasesPageModule { }
