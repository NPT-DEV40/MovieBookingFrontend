import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { HomePageComponent } from './home-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HomePageComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule
  ]
})
export class HomePageModule { }
