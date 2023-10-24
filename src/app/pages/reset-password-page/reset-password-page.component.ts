import { resetPasswordRequest } from './../../core/interfaces/resetPasswordRequest';
import { Component, ElementRef, Renderer2, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomvalidationService } from 'src/app/core/services/customvalidation.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reset-password-page',
  templateUrl: './reset-password-page.component.html',
  styleUrls: ['./reset-password-page.component.css']
})
export class ResetPasswordPageComponent implements OnInit {
  @ViewChild('iconHide1', { static: true }) iconHide1!: ElementRef;
  @ViewChild('iconShow1', { static: true }) iconShow1!: ElementRef;
  @ViewChild('iconHide2', { static: true }) iconHide2!: ElementRef;
  @ViewChild('iconShow2', { static: true }) iconShow2!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
  @ViewChild('confirmPasswordInput', { static: true }) confirmPasswordInput!: ElementRef;
  form!: FormGroup<resetPasswordRequest>;
  loading = false;
  submitted = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  isIconHideVisible1 = true;
  isIconShowVisible1 = false;
  isIconHideVisible2 = true;
  isIconShowVisible2 = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private customvalidation: CustomvalidationService,
    private alert: AlertService,
    private elRef: ElementRef, 
    private renderer: Renderer2,
    private _ngZone: NgZone,
    private auth: AuthService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {
      validators: [this.customvalidation.MatchPassword('password', 'confirmPassword')]
    });
  }

  handleHide(inputName: string) {
    if(inputName==='passwordInput'){
      const passwordType = this.passwordInput.nativeElement.type === 'password' ? 'text' : 'password';
      this.passwordInput.nativeElement.type = passwordType;


      this.isIconHideVisible1 = false;
      this.isIconShowVisible1 = true;
    }
    else if (inputName==='confirmPasswordtype'){
      const confirmPasswordtype = this.passwordInput.nativeElement.type === 'password' ? 'text' : 'password';
      this.confirmPasswordInput.nativeElement.type = confirmPasswordtype;

      this.isIconHideVisible2 = false;
      this.isIconShowVisible2 = true;
    }
  }

  handleShow(inputName: string) {
    if(inputName==='passwordInput'){
      const passwordType = this.passwordInput.nativeElement.type === 'text' ? 'password' : 'text';
      this.passwordInput.nativeElement.type = passwordType;

      this.isIconHideVisible1 = true;
      this.isIconShowVisible1 = false;
    }
    else if (inputName==='confirmPasswordtype'){
      const confirmPasswordtype = this.passwordInput.nativeElement.type === 'text' ? 'password' : 'text';
      this.confirmPasswordInput.nativeElement.type = confirmPasswordtype;

      this.isIconHideVisible2 = true;
      this.isIconShowVisible2 = false;
    }
  }
  

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alert.clear();

    if(this.form.invalid) {
      return;
    } else {
      console.log(this.form.value);
    }

    this.loading = true;

    this.auth.register(this.form.value as resetPasswordRequest).pipe(first()).subscribe({
      next: () => {
        console.log("Reset password Successfully");
        this.alert.success("Reset password Successfully", {keepAfterRouteChange: true});
        this.router.navigate(['../login'], {relativeTo: this.route})
      },
      error: (e) => {
        console.log(e);
        this.alert.error("Reset password Failed");
        this.loading = false;
      },
      complete: () => {
        console.log("Reset password Completed");
      }
    });
  }
}