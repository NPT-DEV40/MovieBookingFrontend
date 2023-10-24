import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryPageRoutingModule } from './history-page-routing.module';
import { HistoryPageComponent } from './history-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { IconDownCustomModule } from 'src/app/features/icon-down-custom/icon-down-custom.module';
import { SlideModule } from 'src/app/features/slide/slide.module';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';
import { FilmModule } from 'src/app/features/film/film.module';


@NgModule({
  declarations: [HistoryPageComponent],
  imports: [
    CommonModule,
    HistoryPageRoutingModule,
    HeadersModule,
    FootersModule,
    IconDownCustomModule,
    SlideModule,
    ButtonSupportModule,
    FilmModule,
  ]
})
export class HistoryPageModule { }
