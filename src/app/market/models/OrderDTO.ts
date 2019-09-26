export class Order {
    OrderId: number;
    OrderDate: string;
    UserId: number;
    Products: [{ ProductId: number, Quantity: number }]
    PaymentType: string;
    TotalPrice: number;
    CustomerName: string;
}
