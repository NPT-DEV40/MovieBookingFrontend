import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThanksPageRoutingModule } from './thanks-page-routing.module';
import { ThanksPageComponent } from './thanks-page.component';
import { TicketModule } from 'src/app/features/ticket/ticket.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ThanksPageComponent],
  imports: [
    CommonModule,
    ThanksPageRoutingModule,
    TicketModule,
    FontAwesomeModule
  ],
})
export class ThanksPageModule { 
  
}