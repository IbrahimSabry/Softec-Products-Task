import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../models/orderDTO';
import { OrderService } from '../../services/order.service';
import { MatTableDataSource } from '@angular/material';
import { Product } from '../../models/productDTO';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})

export class OrderDetailsComponent implements OnInit {
  order = new Order();
  dataSource: MatTableDataSource<Product>;
  displayedColumns = ['ProductImg', 'ProductName', 'ProductPrice', 'Quantity'];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private orderService: OrderService, 
    private router: Router,
    ) { }

  ngOnInit() {
    if (this.activatedRoute.snapshot.params['id']) {
      this.activatedRoute.params.subscribe(p => {
        this.order.OrderId = p["id"]
        this.getOrder();
      })
    }
    else {
      this.router.navigateByUrl('/Orders');
    }
  }
  getOrder = () =>{
    this.orderService.ordersSource.subscribe(orders => {
      if (orders.length) {
        this.order = orders.find(u => u.OrderId == this.order.OrderId);
        this.dataSource = new MatTableDataSource(this.order.Products);

        console.log(this.order);
      }
      else {
        this.router.navigateByUrl("/Orders");
      }
    })
  }
}
