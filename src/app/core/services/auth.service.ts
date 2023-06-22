import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { user } from 'src/app/features/users/interfaces/user';
import { UserService } from 'src/app/features/users/services/user.service';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userSubject: BehaviorSubject<user | null>;
  public user: Observable<user | null>;

  userService!: UserService;

  constructor(
    private router: Router,
    private http: HttpClient
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
      }, httpOptions).subscribe((response: any) => {
        const token = response.headers.get('nptCookie');
        sessionStorage.setItem('token', token);
        this.userService.saveUser(response.body);
        this.userSubject.next(response.body);
      });
  }

  register(firstName: string, lastName: string, username: string, email: string, password: string): Observable<any> {
    return this.http.post(environment.api + 'auth/register',
      {
        firstName,
        lastName,
        username,
        email,
        password
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
