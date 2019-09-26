
import { Injectable } from '@angular/core';
import { Customer } from '../models/customerDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CustomerService {
  customers: Customer[];
  customersSource = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    this.getCustomers()
  }

  getCustomers = () => {
    this.http.get<Customer[]>(environment.baseUrl + 'Users.json').subscribe(customers => {
      this.customers = customers.sort((one, two) => (one.Id > two.Id ? -1 : 1));
      this.customersSource.next(this.customers);
    });
  }
  getCustomer = (customerId: number) : Customer => {
    return this.customers[this.customers.findIndex(u => u.Id == customerId)];
  }
}
