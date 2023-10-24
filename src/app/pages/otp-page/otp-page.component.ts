import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { otpRequest } from 'src/app/core/interfaces/otpRequest';
import { AuthService } from 'src/app/core/services/auth.service';
import { CustomvalidationService } from 'src/app/core/services/customvalidation.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent implements OnInit{
  form!: FormGroup<otpRequest>;
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
      otp: new FormControl('', [Validators.required, Validators.minLength(4)])
    }, {
      validators: [this.customvalidation.MatchOTP('otp')]
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
    } else {
      console.log(this.form.value);
    }

    this.loading = true;

    this.auth.otp(this.form.value as otpRequest).pipe(first()).subscribe({
      next: () => {
        console.log("Verify Successfully");
        this.alert.success("Verify Successfully", {keepAfterRouteChange: true});
        this.router.navigate(['../login'], {relativeTo: this.route})
      },
      error: (e) => {
        console.log(e);
        this.alert.error("Verify Failed");
        this.loading = false;
      },
      complete: () => {
        console.log("Verify Completed");
      }
    });
  }
}
