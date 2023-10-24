import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageRoutingModule } from './login-page-routing.module';
import { LoginPageComponent } from './login-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/materials/material.module';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HeadersModule,
    FootersModule,
    FontAwesomeModule
  ]
})
export class LoginPageModule { }
