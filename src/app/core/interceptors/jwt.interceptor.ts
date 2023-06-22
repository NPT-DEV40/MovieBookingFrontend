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

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');
    const user = this.authService.userValue;
    const api = request.url.startsWith(environment.api);

    if(api && token && user) {
      request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      }); 
    }
    return next.handle(request);
  }
}
