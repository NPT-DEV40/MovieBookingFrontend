import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map, shareReplay, tap } from 'rxjs';
import { User } from 'src/app/features/users/interfaces/user';
import { UserService } from 'src/app/features/users/services/user.service';
import { environment } from 'src/environments/environment';
import { registerRequest } from '../interfaces/registerRequest';
import { otpRequest } from '../interfaces/otpRequest';
import { resetPasswordRequest } from '../interfaces/resetPasswordRequest';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>;
  jwtService: JwtHelperService = new JwtHelperService();


  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable(); // Convert BehaviorSubject to Observable, so that it can be subscribed but not have permission to change value
  }

  public get userValue() {
    return this.userSubject.value;
  }

  getAccessToken(): string {
    var token = sessionStorage.getItem('token');
    if(token) {
      var isTokenExpire = this.jwtService.isTokenExpired(token);
      if(isTokenExpire) {
        this.userSubject.next(null);
        return "";
      }
      var tokenPayload = this.jwtService.decodeToken(token);
      this.userSubject.next(tokenPayload);
      return token;
    }
    return "";
  }

  login(username: string, password: string) {
    return this.http.post<User>(environment.api + 'auth/login',
      {
        username,
        password
      }, httpOptions).pipe(map((response: any) => {
        sessionStorage.setItem('token', response["token"]);
        console.log("token: " + sessionStorage.getItem('token'));
        this.userService.saveUser(response);
        this.userSubject.next(response);
      }), shareReplay());
  }

  LoginWithGoogle(credentialResponse: any) {
    return this.http.post(environment.api + 'auth/login/google',
      credentialResponse,
      httpOptions).pipe(map((response: any) => {
        console.log("reponse:" + response);
        sessionStorage.setItem('token', response["token"]);
        this.userService.saveUser(response);
        this.userSubject.next(response);
      }));
  }

  register(registerRequest: registerRequest): Observable<any> {
    return this.http.post(environment.api + 'auth/register',
      {
        fullName: registerRequest.fullName,
        userName: registerRequest.userName,
        email: registerRequest.email,
        password: registerRequest.password,
        confirmPassword: registerRequest.confirmPassword
      }, httpOptions);
  }

  otp(otpRequest: otpRequest): Observable<any> {
    return this.http.post(environment.api + 'auth/otp',
      {
        otp: otpRequest.otp,
      }, httpOptions);
  }

  resetPassword(resetPasswordRequest: resetPasswordRequest): Observable<any> {
    return this.http.post(environment.api + 'auth/register',
      {
        password: resetPasswordRequest.password,
        confirmPassword: resetPasswordRequest.confirmPassword
      }, httpOptions);
  }

  logout() {
    sessionStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
    return this.http.post(environment.api + 'auth/logout',
      {},
      httpOptions);
  };
}
