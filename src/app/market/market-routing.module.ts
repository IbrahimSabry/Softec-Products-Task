import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';

const routes: Routes = [
  { path: 'Products', component: ProductsComponent },
  { path: 'Orders', component: OrdersComponent },
  { path: 'Orders/:id', component: OrderDetailsComponent },
  { path: '**', component: ProductsComponent }, // wiledcard path used when no other path match
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MarketRoutingModule { }
