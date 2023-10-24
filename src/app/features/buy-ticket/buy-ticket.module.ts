import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuyTicketComponent } from './buy-ticket.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [BuyTicketComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [BuyTicketComponent]
})
export class BuyTicketModule { }
