import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materials/material.module';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatComponent } from './features/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { OrderComponent } from './features/order/components/order.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { AdminChatPageComponent } from './admin-pages/admin-chat-page/admin-chat-page.component';
import { HistoryPageComponent } from './pages/history-page/history-page.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page/forgot-password-page.component';
import { OtpPageComponent } from './pages/otp-page/otp-page.component';
import { ResetPasswordPageComponent } from './pages/reset-password-page/reset-password-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ChatBoxComponent } from './features/chat-box/chat-box.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: false
}

// export function jwtOptionFactor(authService: AuthService) {
//   return {
//     tokenGetter: () => {
//       return authService.getAccessToken();
//     },
//     allowedDomains: ['http://localhost:4200/*'],
//     disallowedRoutes: ['http://localhost:8080/api/auth/login']
//   };
// }


@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        OrderComponent,
        AdminChatPageComponent,
    ],
    exports: [
        MatSelectModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider(environment.googleId)
                    },
                ],
                onError: (err) => {
                    console.error(err);
                }
            } as SocialAuthServiceConfig,
        }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        MaterialModule,
        FontAwesomeModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage()),
        provideFirestore(() => getFirestore()),
    ]
})
export class AppModule { }