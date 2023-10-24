import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { ProfilePageComponent } from './profile-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { ButtonSupportModule } from 'src/app/features/button-support/button-support.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    ProfilePageRoutingModule,
    HeadersModule,
    FootersModule,
    ButtonSupportModule,
    FontAwesomeModule
  ]
})
export class ProfilePageModule { }
