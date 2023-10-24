import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordPageRoutingModule } from './forgot-password-page-routing.module';
import { ForgotPasswordPageComponent } from './forgot-password-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';


@NgModule({
  declarations: [ForgotPasswordPageComponent],
  imports: [
    CommonModule,
    ForgotPasswordPageRoutingModule,
    HeadersModule,
    FootersModule
  ]
})
export class ForgotPasswordPageModule { }
