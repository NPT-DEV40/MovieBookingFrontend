import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  saveUser(response:any): void {
    localStorage.setItem('user', JSON.stringify(response));
  }


}
