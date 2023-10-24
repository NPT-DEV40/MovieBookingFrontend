import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtpPageComponent } from './otp-page.component';

const routes: Routes = [{path:'', component: OtpPageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtpPageRoutingModule { }
