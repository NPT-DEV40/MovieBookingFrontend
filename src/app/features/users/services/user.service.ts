import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }

  saveUser(response:any) {
    localStorage.setItem('user', JSON.stringify(response));
  }


}
