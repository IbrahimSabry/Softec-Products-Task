import { NgModule } from '@angular/core';

import { MarketRoutingModule } from './market-routing.module'
import { ProductsComponent } from './components/products/products.component';

import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarketInterceptorService } from './services/httpInterceptor';
import { OrdersComponent } from './components/orders/orders.component';

@NgModule({
  declarations: [
    ProductsComponent,
    OrdersComponent,
    ],
  imports: [
    SharedModule,
    MarketRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MarketInterceptorService, multi: true },
  ]
})
export class MarketModule { }
