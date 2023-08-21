import { Component } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  constructor(private orderService: OrderService) {}


  public getOrders() {
    this.orderService.getOrders();
  }
}
