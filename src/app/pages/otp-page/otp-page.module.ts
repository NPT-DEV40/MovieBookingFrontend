import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtpPageRoutingModule } from './otp-page-routing.module';
import { OtpPageComponent } from './otp-page.component';
import { HeadersModule } from 'src/app/features/headers/headers.module';
import { FootersModule } from 'src/app/features/footers/footers.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [OtpPageComponent],
  imports: [
    CommonModule,
    OtpPageRoutingModule,
    ReactiveFormsModule,
    HeadersModule,
    FootersModule
  ]
})
export class OtpPageModule { }
