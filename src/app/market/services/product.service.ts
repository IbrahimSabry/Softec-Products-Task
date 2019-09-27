import { Injectable } from '@angular/core';
import { Product } from '../models/productDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[];
  productsSource = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getProducts()
  }

  getProducts = () => {
    this.http.get<Product[]>(environment.baseUrl + 'Products.json').subscribe(products => {
      this.products = products;
      this.productsSource.next(this.products);
    });
  }
  editProductQuantity = (productId: number, quantity: number) => {
    this.products[this.products.findIndex(u => u.ProductId == productId)].AvailablePieces = quantity;
    this.productsSource.next(this.products);
  }
  getProduct = (productId: number): Product => {
    let product = this.products[this.products.findIndex(u => u.ProductId == productId)];
    return product;
  }
}
