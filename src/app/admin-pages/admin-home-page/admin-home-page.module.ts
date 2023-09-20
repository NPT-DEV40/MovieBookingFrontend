import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMoviesListComponent } from './admin-movies-list/admin-movies-list.component';
import { AdminHomePageComponent } from './admin-home-page.component';
import { AdminHomePageRoutingModule } from './admin-home-page-routing.module';
import { MaterialModule } from 'src/app/materials/material.module';
import { AdminMoviesCardComponent } from './admin-movies-card/admin-movies-card.component';
import { AppModule } from 'src/app/app.module';
import { HomePageModule } from 'src/app/pages/home-page/home-page.module';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { AdminMovieEditPageComponent } from '../admin-movie-edit-page/admin-movie-edit-page.component';



@NgModule({
  declarations: [AdminHomePageComponent, AdminMoviesListComponent, AdminMoviesCardComponent, AdminMovieEditPageComponent],
  imports: [
    CommonModule,
    AdminHomePageRoutingModule,
    MaterialModule,
    HeadersModule,
    FootersModule
  ]
})
export class AdminHomePageModule { }
