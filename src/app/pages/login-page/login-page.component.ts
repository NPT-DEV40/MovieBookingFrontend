import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { first, pipe } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  googleClientId = environment.googleId;

  ngZone: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private _ngZone: NgZone,
    private router: Router,
    private alert: AlertService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.loginWithGoogle();
  }


  loginWithGoogle(): void {
    // @ts-ignore
    window.onGoogleLibraryLoad = () => {
      console.log('Google\'s One-tap sign in script loaded!');

      // @ts-ignore
      google.accounts.id.initialize({
        client_id: this.googleClientId,
        callback: this.handleCredentialResponse.bind(this),
        auto_select: false,
        cancel_on_tap_outside: false
      });

      // @ts-ignore
      google.accounts.id.renderButton(
        // @ts-ignore
        document.getElementById('googleButton'),
        { theme: 'outline', size: 'large' }
      );

      // @ts-ignore
      google.accounts.id.prompt((notification: PromptMomentNotification) => {
        console.log('Google prompt event triggered...');
      });

    };
  }

  async handleCredentialResponse(response: CredentialResponse) {
    // console.log('Got credential response:');
    // console.log(response.credential);
    // await this.auth.LoginWithGoogle(response.credential).subscribe({
    //   next: (x: any) => {
    //     this._ngZone.run(() => {
    //       this.router.navigate(['/home']);
    //     })
    //   },
    //   error: e => {
    //     console.log(e);
    //   }
    // });
  }

  get f() {
    return this.loginForm?.controls;
  }

  onSubmit() {

    this.submitted = true;

    this.alert.clear();

    if (this.loginForm?.invalid) {
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
