import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { HomePageComponent } from './home-page.component';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';


@NgModule({
  declarations: [HomePageComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
