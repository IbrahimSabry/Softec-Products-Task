import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'Products', component: ProductsComponent },
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
