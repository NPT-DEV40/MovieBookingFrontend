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
import { AdminMovieEditPageComponent } from './admin-pages/admin-movie-edit-page/admin-movie-edit-page.component';
import { OrderComponent } from './features/order/components/order.component';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';

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


import { FilmComponent } from './features/film/film.component';
import { CinemaComponent } from './features/cinema/cinema.component';
import { ThanksPageComponent } from './pages/thanks-page/thanks-page.component';
import { TicketComponent } from './features/ticket/ticket.component';
import { BuyTicketComponent } from './features/buy-ticket/buy-ticket.component';
import { SlideComponent } from './features/slide/slide.component';
import { NewReleasesPageComponent } from './pages/new-releases-page/new-releases-page.component';
import { HomePageModule } from "./pages/home-page/home-page.module";

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent,
        AdminMovieEditPageComponent,
        OrderComponent,
        ThanksPageComponent,
        TicketComponent,
        NewReleasesPageComponent,
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
        HomePageModule,
        FontAwesomeModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideStorage(() => getStorage()),
        provideFirestore(() => getFirestore()),
    ]
})
export class AppModule { }