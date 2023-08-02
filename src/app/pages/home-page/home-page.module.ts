import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HeaderComponent } from 'src/app/features/headers/components/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomePageComponent } from './home-page.component';
import { FooterComponent } from 'src/app/features/footers/components/footer.component';
import { MovieComponent } from 'src/app/features/movies/components/movie/movie.component';
import { AppModule } from 'src/app/app.module';


@NgModule({
  declarations: [ HomePageComponent, MovieComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    FontAwesomeModule,
    AppModule
  ]
})
export class HomePageModule { }
