import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, pipe } from 'rxjs';
import { loginRequest } from 'src/app/core/interfaces/loginRequest';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alert: AlertService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm?.controls;
  }

  onSubmit() {

    this.submitted = true;

    this.alert.clear(); 

    if(this.loginForm?.invalid) {
      return;
    }

    this.loading = true;

    this.auth.login(this.f['userName'].value, this.f['password'].value)
    .pipe(first()).subscribe({
      next: () => {
          console.log('Login successful');
          this.router.navigate(['../home'], { relativeTo: this.route });
      },
      error: (e) => {
        console.log(e);
      }
    });
  }
}
