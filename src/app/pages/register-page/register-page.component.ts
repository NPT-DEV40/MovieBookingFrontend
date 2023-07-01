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
  form!: FormGroup<registerRequest>;
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
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    }, {
      validators: [this.customvalidation.MatchPassword('password', 'confirmPassword')]
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
