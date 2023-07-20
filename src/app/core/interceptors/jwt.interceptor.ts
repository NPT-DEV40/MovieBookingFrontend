import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = this.authService.userValue;
    const token = sessionStorage.getItem('token');
    const api = request.url.startsWith(environment.api);

    console.log(user?.email);

    console.log('token inteceptor: ' + token);

    console.log('api inteceptor: ' + api);


    if(api && token && user) {
      console.log('intercepted');
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }); 
    }
    return next.handle(request);
  }
}
