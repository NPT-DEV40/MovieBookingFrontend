import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSupportComponent } from './button-support.component';



@NgModule({
  declarations: [ButtonSupportComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonSupportComponent
  ]
})
export class ButtonSupportModule { 
}
