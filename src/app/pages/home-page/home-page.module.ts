import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { HomePageRoutingModule } from './home-page-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule {
  faCircleChevronRight = faCircleChevronRight;
}