import { Customer } from './customerDTO';
import { Product } from './productDTO';

export class Order {
    constructor() {
        this.Customer = new Customer;
    }
    OrderId: number;
    OrderDate: string;
    UserId: number;
    Products: Product[];
    PaymentType: string;
    TotalPrice: number;
    CustomerName: string;
    Customer: Customer
}
