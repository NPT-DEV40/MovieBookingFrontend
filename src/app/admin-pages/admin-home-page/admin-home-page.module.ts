import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMoviesListComponent } from './admin-movies-list/admin-movies-list.component';
import { AdminHomePageComponent } from './admin-home-page.component';
import { AdminHomePageRoutingModule } from './admin-home-page-routing.module';
import { MaterialModule } from 'src/app/materials/material.module';
import { AdminMoviesCardComponent } from './admin-movies-card/admin-movies-card.component';



@NgModule({
  declarations: [AdminHomePageComponent, AdminMoviesListComponent, AdminMoviesCardComponent],
  imports: [
    CommonModule,
    AdminHomePageRoutingModule,
    MaterialModule
  ]
})
export class AdminHomePageModule { }
