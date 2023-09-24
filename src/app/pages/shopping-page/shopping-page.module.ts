import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingPageRoutingModule } from './shopping-page-routing.module';
import { ShoppingPageComponent } from './shopping-page.component';
import { TicketModule } from 'src/app/features/ticket/ticket.module';
import { SlideModule } from 'src/app/features/slide/slide.module';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';


@NgModule({
  declarations: [
    ShoppingPageComponent
  ],
  imports: [
    CommonModule,
    ShoppingPageRoutingModule,
    FontAwesomeModule,
    TicketModule,
    SlideModule,
    HeadersModule,
    FootersModule,
    ButtonSupportModule
  ]
})
export class ShoppingPageModule { }
