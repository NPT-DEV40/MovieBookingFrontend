import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users!: [];

  constructor(private http: HttpClient) { }

  saveUser(response: any): void {
    localStorage.setItem('user', JSON.stringify(response));
  }

  getAllUser() {
    this.http.get('http://localhost:8080/api/auth/users').subscribe((response: any) => {
      console.log(response);
      this.users = response;
    });
    // return this.users;
  }
}
