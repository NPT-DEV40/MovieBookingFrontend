import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterPageRoutingModule } from './register-page-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterPageComponent } from './register-page.component';


@NgModule({
  declarations: [
    RegisterPageComponent
  ],
  imports: [
    CommonModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ]
})
export class RegisterPageModule { }
