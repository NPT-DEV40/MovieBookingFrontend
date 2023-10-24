import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule,
    HeadersModule,
    FootersModule,
    FontAwesomeModule
  ]
})
export class RegisterPageModule { }
