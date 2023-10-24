import { Component, ElementRef, Renderer2, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { registerRequest } from 'src/app/core/interfaces/registerRequest';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomvalidationService } from 'src/app/core/services/customvalidation.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {
  @ViewChild('iconHide', { static: true }) iconHide!: ElementRef;
  @ViewChild('iconShow', { static: true }) iconShow!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;  
  form!: FormGroup<registerRequest>;
  loading = false;
  submitted = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  isIconHideVisible = true;
  isIconShowVisible = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private customvalidation: CustomvalidationService,
    private alert: AlertService,
    private auth: AuthService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {
      validators: [this.customvalidation.MatchPassword('password', 'confirmPassword')]
    });
  }

  handleHide() {
    const passwordType = this.passwordInput.nativeElement.type === 'password' ? 'text' : 'password';
    this.passwordInput.nativeElement.type = passwordType;

    this.isIconHideVisible = false;
    this.isIconShowVisible = true;
  }

  handleShow() {
    const passwordType = this.passwordInput.nativeElement.type === 'text' ? 'password' : 'text';
    this.passwordInput.nativeElement.type = passwordType;

    this.isIconHideVisible = true;
    this.isIconShowVisible = false;
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

    this.auth.register(this.form.value as registerRequest).pipe(first()).subscribe({
      next: () => {
        console.log("Register Successfully");
        this.alert.success("Register Successfully", {keepAfterRouteChange: true});
        this.router.navigate(['../login'], {relativeTo: this.route})
      },
      error: (e) => {
        console.log(e);
        this.alert.error("Register Failed");
        this.loading = false;
      },
      complete: () => {
        console.log("Register Completed");
      }
    });
  }
}
