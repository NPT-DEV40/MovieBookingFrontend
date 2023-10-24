import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordPageRoutingModule } from './reset-password-page-routing.module';
import { ResetPasswordPageComponent } from './reset-password-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MaterialModule } from 'src/app/materials/material.module';


@NgModule({
  declarations: [ResetPasswordPageComponent],
  imports: [
    CommonModule,
    ResetPasswordPageRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    HeadersModule,
    FootersModule,
    FontAwesomeModule
  ]
})
export class ResetPasswordPageModule { }
