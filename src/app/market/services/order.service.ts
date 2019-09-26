
import { Injectable } from '@angular/core';
import { Order } from '../models/orderDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CustomerService } from './customer.service';
import { ProductService } from './product.service';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
  orders: Order[];
  ordersSource = new BehaviorSubject([]);

  constructor(private http: HttpClient, private customerService: CustomerService,
    private productService: ProductService) {
    this.getOrders()
  }

  getOrders = () => {
    this.http.get<Order[]>(environment.baseUrl + 'Orders.json').subscribe(orders => {
      this.orders = orders
      this.orders.forEach( order => {
        order.CustomerName = this.customerService.getCustomer(order.UserId).Name;
        order.TotalPrice = 0;
        order.Products.forEach(product =>{
          order.TotalPrice += this.productService.getProduct(product.ProductId).ProductPrice
        });
      }
      );
      this.ordersSource.next(this.orders);
    });
  }
  getOrder = (orderId: number): Order => {
    return this.orders[this.orders.findIndex(u => u.OrderId == orderId)];
  }
}
