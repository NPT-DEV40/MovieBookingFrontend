import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BuyTicketComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [BuyTicketComponent]
})
export class BuyTicketModule { }
