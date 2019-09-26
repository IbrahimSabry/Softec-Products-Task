
import { Injectable } from '@angular/core';
import { Order } from '../models/orderDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
  orders: Order[];
  ordersSource = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getOrders()
  }

  getOrders = () => {
    this.http.get<Order[]>(environment.baseUrl + 'Orders.json').subscribe(orders => {
      this.orders = orders.sort((one, two) => (one.OrderId > two.OrderId ? -1 : 1));
      this.ordersSource.next(this.orders);
    });
  }
  getOrder = (orderId: number) : Order => {
    return this.orders[this.orders.findIndex(u => u.OrderId == orderId)];
  }
}
