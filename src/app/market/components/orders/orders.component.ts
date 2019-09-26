import { Component, OnInit, ViewChild } from '@angular/core';
import { Order } from '../../models/orderDTO';
import { OrderService } from '../../services/order.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = new Array<Order>();

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  dataSource: MatTableDataSource<Order>;
  displayedColumns = ['OrderId', 'CustomerName', 'OrderDate', 'TotalPrice', 'PaymentType'];


  constructor(public orderService: OrderService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders = () => {
    this.orderService.ordersSource.subscribe(result => {
      this.orders = result;
      this.organizeOrders();
    });
  }

  search = (filterValue: string) => {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.paginator.firstPage();
  }

  organizeOrders() {
    this.dataSource = new MatTableDataSource(this.orders);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}