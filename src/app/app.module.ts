
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { MarketModule } from './market/market.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    MarketModule
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }