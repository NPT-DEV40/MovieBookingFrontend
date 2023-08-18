import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  public getOrders() {
    this.httpClient.get(environment.api + "payment/submitOrder", {responseType: 'text'}).subscribe((data) => {
      console.log(data);
      window.open(data, "_blank");
    });
  }

  public resultOrders() {
    this.httpClient.get(environment.api + "payment/resultOrder").subscribe((data) => {
      this.router.navigate([""]);
    });
  }
}
