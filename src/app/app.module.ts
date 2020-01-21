import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './pricing/header/header.component';
import { NgModule } from '@angular/core';
import { PricingComponent } from './pricing/pricing.component';
import { ToggleComponent } from './pricing/header/toggle/toggle.component';
import { PriceComponent } from './pricing/price/price.component';

@NgModule({
  declarations: [
    AppComponent,
    PricingComponent,
    HeaderComponent,
    ToggleComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
