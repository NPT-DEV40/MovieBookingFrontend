import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { registerRequest } from 'src/app/core/interfaces/registerRequest';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomvalidationService } from 'src/app/core/services/customvalidation.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private route: ActivatedRoute,
    private customvalidation: CustomvalidationService,
    private alert: AlertService,
    private auth: AuthService) { }


  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userName: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6), this.customvalidation.patternValidator()],
      confirmPassword: ['', Validators.required, Validators.minLength(6)]
    }, {
      validators: this.customvalidation.MatchPassword('password', 'confirmPassword')
    });
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    this.alert.clear();

    if(this.form.invalid) {
      return;
    }

    this.loading = true;

    this.auth.register(this.form.value as registerRequest)
    .pipe(first()).subscribe({
      next: () => {
        this.alert.success("Register Successfully", {keepAfterRouteChange: true});
        this.router.navigate(['../login'], {relativeTo: this.route})
      },
      error: () => {
        this.alert.error("Register Failed");
        this.loading = false;
      }
    });
  }
}
