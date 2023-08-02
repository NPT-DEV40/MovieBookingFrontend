import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './materials/material.module';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { GoogleLoginProvider, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { environment } from 'src/environments/environment.development';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ChatComponent } from './features/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { AdminMovieEditPageComponent } from './admin-pages/admin-movie-edit-page/admin-movie-edit-page.component';
import { HeaderComponent } from './features/headers/components/header.component';
import { FooterComponent } from './features/footers/components/footer.component';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: false
}

const config: SocketIoConfig = { url: 'http://localhost:8080/websocket', options: httpOptions };

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    HeaderComponent,
    FooterComponent,
    AdminMovieEditPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    SocketIoModule.forRoot(config),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  ],
  exports: [
    HeaderComponent,
    FooterComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
