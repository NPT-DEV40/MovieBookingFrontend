import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor() { }

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if(!control.value) {
        return null;
      }
      const regext = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regext.test(control.value);
      return valid ? null : {invalidPassword: true};
    }
  }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password]; 
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if(!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMisMatch']) {
        return null;
      }

      if(passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMisMatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
      return true;
    }
  }

  MatchOTP(otp: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[otp]; 

      // if(!passwordControl || !confirmPasswordControl) {
      //   return null;
      // }

      // if(confirmPasswordControl.errors && !confirmPasswordControl.errors['passwordMisMatch']) {
      //   return null;
      // }

      // if(passwordControl.value !== confirmPasswordControl.value) {
      //   confirmPasswordControl.setErrors({passwordMisMatch: true});
      // } else {
      //   confirmPasswordControl.setErrors(null);
      // }
      return true;
    }
  }
}
