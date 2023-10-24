import { FacebookLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, ElementRef, Renderer2, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialResponse } from 'google-one-tap';
import { first, pipe } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AlertService } from 'src/app/features/alert/services/alert.service';
import { environment } from 'src/environments/environment';
import { faEyeSlash,faEye } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  @ViewChild('iconHide', { static: true }) iconHide!: ElementRef;
  @ViewChild('iconShow', { static: true }) iconShow!: ElementRef;
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;  

  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  faEyeSlash = faEyeSlash;
  faEye = faEye;

  isIconHideVisible = true;
  isIconShowVisible = false;

  googleClientId = environment.googleId;

  ngZone: any;

  constructor(
    private formBuilder: FormBuilder,
    private elRef: ElementRef, 
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private _ngZone: NgZone,
    private router: Router,
    private alert: AlertService,
    private auth: AuthService,
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
    console.log('Got credential response:');
    console.log(response.credential);
    await this.auth.LoginWithGoogle(response.credential).subscribe({
      next: (x: any) => {
        this._ngZone.run(() => {
          this.router.navigate(['/home']);
        })
      },
      error: e => {
        console.log(e);
      }
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
