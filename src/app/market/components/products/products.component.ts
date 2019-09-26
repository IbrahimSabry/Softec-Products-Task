import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatSnackBar } from '@angular/material';
import { Product } from '../../models/productDTO';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products = new Array<Product>();
  breakpoint:number;
  rowHeight: string;
  constructor(public productService: ProductService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts();
    this.breakpoint = (window.innerWidth <= 400) ? 1 : 2;
    this.rowHeight = (window.innerWidth <= 400) ? '2:2.5' : '2:1.5';
  }

  getProducts = () => {
    this.productService.productsSource.subscribe(result => {
      this.products = result;
    });
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 2;
    this.rowHeight = (event.target.innerWidth <= 400) ? '2:2.5' : '2:1.5';
  }

}
