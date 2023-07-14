import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { user } from 'src/app/features/users/interfaces/user';
import { UserService } from 'src/app/features/users/services/user.service';
import { environment } from 'src/environments/environment';
import { registerRequest } from '../interfaces/registerRequest';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
}



@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private userSubject: BehaviorSubject<user | null>;
  public user: Observable<user | null>;


  constructor(
    private router: Router,
    private http: HttpClient,
    private userService: UserService
  ) {
    this.userSubject = new BehaviorSubject<user | null>(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!) : null);
    this.user = this.userSubject.asObservable(); // Convert BehaviorSubject to Observable, so that it can be subscribed but not have permission to change value
  }

  public get userValue() {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http.post(environment.api + 'auth/login',
      {
        username,
        password
      }, httpOptions).pipe(map((response: any) => {
        sessionStorage.setItem('token', response["token"]);
        console.log("token: " + sessionStorage.getItem('token'));
        this.userService.saveUser(response);
        this.userSubject.next(response);
      }));
  }

  LoginWithGoogle(credentialResponse: any) {
    return this.http.post(environment.api + 'auth/login/google',
      JSON.stringify(credentialResponse),
      httpOptions).pipe(map((response: any) => {
        console.log(response);
        sessionStorage.setItem('token', response["token"]);
        this.userService.saveUser(response);
        this.userSubject.next(response);
      }));
  }

  LoginWithFacebook(credentialResponse: any) {
    
  }

  register(registerRequest: registerRequest): Observable<any> {
    return this.http.post(environment.api + 'auth/register',
      {
        firstName: registerRequest.firstName,
        lastName: registerRequest.lastName,
        userName: registerRequest.userName,
        email: registerRequest.email,
        password: registerRequest.password,
        confirmPassword: registerRequest.confirmPassword
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
